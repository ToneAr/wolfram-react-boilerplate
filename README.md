<p style="text-align: center;">
	<img src="./packages/frontend/assets/banner.svg" alt="isolated" width="400"/>
</p>

# The Wolfram React Boilerplate (WRB)

The Wolfram React Boilerplate, shortened to WRB, is a boilerplate repository allowing the development of cross-platform applications intended to be deployed to both web and desktop sharing a common frontend. It separates each part into a distinct package which is then managed using [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/). It deploys desktop apps using (electron-vite)[https://electron-vite.org/] and builds web apps using [vite](https://vitejs.dev/), both of which make use of local Wolfram Language sockets deployed using [LocalDeploy](https://github.com/ToneAr/LocalDeploy) as a back end in conjunction with a node.JS inter-process communication or IPC API.

## The IPC API
Both deployment methods expose an IPC API for frontend and backend communication. This boilerplate aims to abstract these from the frontend developer such that regardless of environment, the IPC API always contains the same methods and variables. So, the front end developer can call on the IPC by using the `useIPC()` hook like so:
	
```js
import { useIPC } from '@wrb/frontend/src/hooks/useIPC';

const { ipc } = useIPC();

// Listen out for a single event on the 'message' channel
ipc.once('message', (msg) => {
	console.log('Received message', msg);

	// If message is received, send a reply on the 'message' channel
	ipc.send('message', ['reply'])
})

// Event listener listening on channel 'event' assigning the response to a state variable
ipc.on('event', (data) => {
	setData(data)
})
```

### Electron
Electron's backend is the electron's node.JS main process [exposed through window.api](./packages/electron/src/main/preload.ts) before being passed to the frontend. It uses `ipcMain` when inside the main process and `ipcRenderer` when inside the renderer. These can send messages and set up event listeners on either side.

### Web
The web deployment's backend is an express server making use of socket-io websockets for communication with the frontend and is exposed as [WebHandler](./packages/web/src/renderer/WebHandler.ts) class passed to the frontend.


### IPC API properties
| Element 			| Type 									| Description 	|
| --- 				| --- 									| --- 			|
| `api.env` 		| `'web' \| 'electron' \| 'dev'` 		| String used to denote current environment |
| `api.ipc.send` 	| `(channel: string, ...args) => void;`	| Sends *args* as messages to backend on channel ***channel*** |
| `api.ipc.once` 	| `(channel: string, f: (...args) => void) => void;` | Listens to a single event on channel ***channel*** handling the response with the ***f*** callback |
| `api.ipc.on`		| `(channel: string, f: (...args) => void) => void;` | Sets up event listener on channel ***channel*** handling the response with the ***f*** callback |

## Wolfram Language

### React hook
The wolfram language interface can be accessed by using the `useWL()` hook. This hook exposes various methods for interfacing with the WL TCP sockets deployed by LocalDeploy (covered in the next section). Its main 2 properties are:

| Property 		| Type		| Description 	|
| --- 			| --- 		| --- 			|
| `isActive` 	| `boolean`	| Boolean corresponding to LocalDeployment status	|
| `req` 		| `(endp: string, data: object = {}, port: number = 4848) => Promise<unknown>` | Make request to a the LocalDeploy socket on port ***port*** and with endpoint ***endp*** with the input data ***data*** |

The frontend developer can call on these as follows:

```js
import { useWL } from '@wrb/frontend/src/hooks/useWL';

const wl = useWL();

if (wl.isActive) {
	wl.req(
		'endpoint',				// Endpoint						[Required]
		{ param: 'value' },		// Query Object (Default: {}) 	[Optional]
		4848					// Port (Default is 4848) 		[Optional]
	)
}
```

### Expression setup
Inside `@wrb/wl/` are all the files used for the definitions and deployment of the wolfram language TCP sockets. These come as 2 main files:

1. **dispatcher.wl**

	This file contains the definition of the Wolfram Language expressions to deploy as TCP socket listeners. These can be any expressions supported by [GenerateHTTPResponse](http://reference.wolfram.com/language/ref/GenerateHTTPResponse.html). The file is outlined in the form:

	```wl
	{
		{ port_Integer, expr1_ }..
	}
	```

	Each expression will be deployed as a listener on the corresponding port, each being deployed using a different parallel kernel workers (up to the number your core count allows).

2. **deploy.wls**

	This script file will install and initialize the LocalDeploy and then deploy the expressions defined inside `expressions.wl`.

## Yarn scripts
This project uses `yarn` as its package manager.
Using `npm install` and any `npm` scripts should be avoided.

Setup `yarn` globally on your machine by using `npm i -g yarn`.

| Script 						| Alternatives 					| Description 										|
| --- 							| --- 							| ---		 										|
| `yarn start:{alt}` 			| `web \| electron \| wl` 		| Starts a preview version of the application 		|
| `yarn dev:{alt}` 				| `web \| electron \| frontend` | Starts a development server for the application 	|
| `yarn build:{alt}` 			| `web \| electron \| frontend` | Compile and build package files 					|
| `yarn build:electron:{alt}` 	| `win \| mac \| linux` 		| Build electron application distributable for given platform |

To run a script from a workspace you can use the following command:
`yarn workspace [packageName] [command]`

## Initial setup checklist
1. Edit all `package.json` files.
   1. Set project scope, name, repository locatioon, author info, etc. and description
   2. Change the scope name of the packages imported in the `peerDependencies` in `web` and `electron`.
   3. Set the domain in `packages/frontend/package.json`.

## Notes
* Both the electron and web deployment use the assets located within `frontend` package.
* The document title for all deployments is set within `packages/frontend/src/App.tsx`.
* When developing the electron or web dev environments, the static files of frontend are being used so frontend needs to be built using `yarn build:frontend` to apply the changes
  * For hot-reloading of the frontend, use `yarn dev:frontend`.

## Notable resources used in development
The resources listed in this section were invaluable in the development of this project:
- [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)
