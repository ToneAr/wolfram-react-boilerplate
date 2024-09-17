# The Wolfram React Boilerplate
The Wolfram React Boilerplate (WRB) is a monorepo allowing the development of cross-platform applications intended to be deployed to both web 	and desktop based deployments sharing a single frontend. It deploys desktop apps using electron-vite and web apps using vite, both of which make use of local Wolfram Language sockets deployed using [LocalDeploy](https://github.com/ToneAr/LocalDeploy).

## The IPC API
Both deployment methods expose an IPC API for frontend and backend communication. This boilerplate aims to abstract these from the front end developer such that regardless of deployment environment, the IPC API always contains the same methods and variables. So, the front end developer can call on the IPC by using the `useIPC()` hook like so:

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
Electron's backend is the usual electron node main process using ipcMethods exposed on window.api before being passed to the frontend.

### Web
Web's backend is an express server making use of socket-io websockets for communication with the frontend and is exposed as WebHandler class passed to the frontend.


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
		{ port1_Integer, expr1_ },
		{ port2_Integer, expr2_ },
		...
	}
	```

	Each expression will be deployed as a listener on the corresponding port, each being deployed using a different parallel kernel (up to the number your core count allows). This allows the ability to asynchronously make request to the different ports.

2. **deploy.wls**

	This script file will install and initialize the LocalDeploy and then deploy the expressions defined inside `expressions.wl`.

## Global scripts

| Script 						| Alternatives 					| Description 										|
| --- 							| --- 							| ---		 										|
| `yarn start:{alt}` 			| `web \| electron \| wl` 		| Starts a preview version of the application 		|
| `yarn dev:{alt}` 				| `web \| electron \| frontend` | Starts a development server for the application 	|
| `yarn build:{alt}` 			| `web \| electron \| frontend` | Compile and build package files 					|
| `yarn build:electron:{alt}` 	| `win \| mac \| linux` 		| Build electron application distributable for given platform |

## Linting

ESLint and Prettier are both enabled which are linters that flag errors, improper syntax, suspicious constructs and stylistic errors.

## Initial setup checklist

This section outlines a checklist of all steps needed to set up a new project using this template.

<!-- 1. Configure `package.json`
	1. Set `"description"`
	2. Set `"repository"`
	3. Set `"author"`
	4. Configure `"build"`
		1. Set `"productName"`
		2. Set `"extraMetadata:{ "version" }"`
		3. Set `"appId"`
		4. Set `"publish"`
2. Configure `index.html`
	1. Configure your apllication title
3. Configure your app's icons inside `assets/`
4. Define your Wolfram Language APIs
	1. Add any additional endpoints and expressions to `expressions.wl`
	2. Test using `wolframscript -script ./wl/expressions.wl`
5. Build your application -->

## Notable resources used in development
The resources listed in this section were invaluable in the development of this project:
- [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts)
