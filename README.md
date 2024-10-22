<p style="text-align: center;">
	<img src="./packages/frontend/assets/banner.png" alt="isolated" width="400"/>
</p>

# The Wolfram React Boilerplate (WRB)

The Wolfram React Boilerplate, shortened to WRB, is a boilerplate repository allowing the development of cross-platform applications intended to be deployed to both web and desktop sharing a common frontend. It separates each part into a distinct package which is then managed using [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). It deploys desktop apps using [electron-vite](https://electron-vite.org/) and builds web apps using [vite](https://vitejs.dev/), both of which make use of local Wolfram Language sockets deployed using [LocalDeploy](https://github.com/ToneAr/LocalDeploy) as a back end in conjunction with a node.JS inter-process communication or IPC API.

## Yarn scripts
**This project uses `yarn` as its package manager. Using any `npm` should be avoided in place of yarn**.

Setup `yarn` globally on your machine by using:
```sh
npm i -g yarn
```

| Script 				| Alternatives 				| Description 										|
| --- 					| --- 						| ---		 										|
| `yarn test` 			| -					 		| Runs front-end jest tests		 					|
| `yarn start:{alt}` 	| `web \| electron \| wl` 	| Starts a preview version of the application 		|
| `yarn dev:{alt}` 		| `web \| electron` 		| Starts a development server for the application 	|
| `yarn build:{alt}` 	| `web \| electron` 		| Compile and build package files 					|
| `yarn package:{alt}` 	| `win \| mac \| linux` 	| Package electron application distributable for given platform |

To run a script from a workspace you can use the following command:
```sh
yarn workspace @scope/name command
```

### Node modules & Dependencies
Dependencies are managed by the yarn workspace, being installed in the root node_modules and being distributed through symlinks.

* To install an external package to be used by a package in the workspace:
	```sh
	yarn workspace @scope/name add package
	```

* To install an external package to the root package:
	```sh
	yarn add package -W
	```
	* These can then be added to each package by adding `"packageName": "*"` inside the `package.json` dependencies for each corresponding sub-package

## The IPC API
Both deployment methods expose an IPC API for frontend and backend communication. This boilerplate aims to abstract these from the frontend developer such that regardless of environment, the IPC API [always contains the same methods and variables](/packages/frontend/src/api.d.ts). That means that the front end developer can just call on the IPC by using the `useIPC()` hook irregardless of environment like so:

```js
import { useIPC } from '@wrb/frontend/src/hooks/useIPC';

const { ipc } = useIPC();

// Listen out for a single event on the 'message' channel
ipc.once('message', (msg) => {
	console.log('Received message', msg);

	// If message is received, send a reply on the 'message' channel
	ipc.send('message', ['reply'])
})

// Event listener listening on channel 'event' assigning
// the response to a state variable
ipc.on('event', (data) => {
	setData(data)
})
```

### Electron
Electron's backend is the electron's node.JS main process [exposed through window.api](./packages/electron/src/main/preload.ts) before being passed to the frontend. It uses `ipcMain` when inside the main process and `ipcRenderer` when inside the renderer. These can send messages and set up event listeners on either side.

### Web
The web deployment's backend is an express server (WRB IPC Server) making use of [socket-io websockets](https://socket.io/docs/v4/) for communication with the frontend and is exposed as [WebHandler](./packages/web/src/renderer/WebHandler.ts) class passed to the frontend.

#### Production
[PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) is used to run the WRB IPC server. Install it using:
```sh
npm install pm2 -g
# or
yarn global add pm2
```

### IPC API properties
| Element 			| Type 									| Description 	|
| --- 				| --- 									| --- 			|
| `api.env` 		| `'web' \| 'electron' \| 'jest'` 		| String used to denote current environment |
| `api.ipc.send` 	| `(channel: string, ...args) => void;`	| Sends *args* as messages to backend on channel ***channel*** |
| `api.ipc.once` 	| `(channel: string, f: (...args) => void) => void;` | Listens to a single event on channel ***channel*** handling the response with the ***f*** callback |
| `api.ipc.on`		| `(channel: string, f: (...args) => void) => void;` | Sets up event listener on channel ***channel*** handling the response with the ***f*** callback |

## Wolfram Language

### Expression setup
Inside `@wrb/wl/` are all the files used for the definitions and deployment of the wolfram language TCP sockets. These come as 2 main files:

1. **dispatcher.wl**

	[dispatcher.wl](/packages/wl/deploy.wls) contains the definition of the Wolfram Language expressions to deploy as TCP socket listeners. These can be any expressions supported by [GenerateHTTPResponse](http://reference.wolfram.com/language/ref/GenerateHTTPResponse.html). The file is outlined in the form:

	```wl
	{
		{ port_Integer, expr1_ }..
	}
	```

	Each expression will be deployed as a listener on the corresponding port, each being deployed using a different parallel kernel workers (up to the number your core count allows).

2. **deploy.wls**

	This script file will install and initialize the LocalDeploy and then deploy the expressions defined inside [`expressions.wl`](/packages/wl/expressions.wl).

### React hook
The wolfram language interface can be accessed by using the `useWL()` hook. [This hook](/packages/frontend/src/hooks/useWL.tsx) exposes various methods for interfacing with the WL TCP sockets deployed by LocalDeploy (covered in the next section). Its main 2 properties are:

| Property 		| Type		| Description 	|
| --- 			| --- 		| --- 			|
| `isActive` 	| `boolean`	| Boolean corresponding to LocalDeployment status	|
| `req` 		| `(ep: string, data: object = {}, port: number = 4848) => Promise<unknown>` | Make request to a the LocalDeploy socket on port ***port*** and with endpoint ***ep*** with the input data ***data*** |

The frontend developer can call on these as follows:

```js
import { useWL } from '@wrb/frontend/src/hooks/useWL';

const wl = useWL();

if (wl.isActive) {
	wl.req(
		'endpoint',			// Endpoint						[Required]
		{ param: 'value' },	// Query Object (Default: {}) 	[Optional]
		4848				// Port (Default is 4848) 		[Optional]
	)
}
```

## Web deployment is WAS deployment
The current configuration of the web deployment of wrb is intended to be deployed within a Wolfram Application Server, with the WRB IPC server running within the active-web-elements-server container, and port 3000 being exposed to the real-world through nginx by routing it to the `/.ipc` endpoint.

See below the an example nginx configuration:
```config
upstream awes {
    server active-web-elements-server:8080;
    keepalive 16;
}

upstream ipc {
    server active-web-elements-server:3000;
}

# ...

server {
    listen       80;
    server_name  nginx;

    location / {
        proxy_pass http://awes/;
    }

    location /.ipc/ {
        proxy_pass http://ipc/;
    }

   # ...
}
```

## Initial setup checklist
1. Configure **all** `package.json` files.
   * Main: [package.json](/package.json)
   * Frontend: [package.json](/packages/frontend/package.json)
   * Electron: [package.json](/packages/electron/package.json)
   * Web:[package.json](/packages/web/package.json)
   * WL: [package.json](/packages/web/package.json)
  
2. Upgrade the electron devtools by setting the `UPGRADE_EXTENSIONS` environment variable:
   * Unix:
        ```
		UPGRADE_EXTENSIONS=1 yarn start:electron
		```
   * Windows:
        ```
		set UPGRADE_EXTENSIONS=1 && yarn start:electron
		```
3. Configure GitHub templates within [.github](/.github/ISSUE_TEMPLATE/) (If required)

## Notes
* WolframScript needs to installed and activated with a valid license on the client's machine for electron deployments or on the host server when deploying on the web.
* Both the electron and web deployment use the assets located within `frontend` package.
* The document title for all deployments is set within `packages/frontend/src/App.tsx`.

## Notable resources used in development
The resources listed in this section were invaluable in the development of this project:
- [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)
