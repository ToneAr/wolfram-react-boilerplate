# electron-react-wl-boilerplate

Incorporating elements from both [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) and the create-electron template [react-ts](https://github.com/alex8088/quick-start/tree/master/packages/create-electron/playground/react-ts) with Wolfram Language integrations making use of [LocalDeploy](https://github.com/ToneAr/LocalDeploy) for an electron boilerplate project using react & typescript for the front end,
node for window management and WolframLanguage as a back-end.

## Development & Building

During development, the application can be tested using `yarn start`. This runs the project in the development environment.

Packaging the application for distribution can be done by running `yarn build:{target_os}` eg. `yarn build:linux`.

## Wolfram Language

Inside the `./wl/` are all the files used for the definitions and deployment of the wolfram language socket. These come as 2 main files:

1. dispatcher.wl

    This file contains the definition of the Wolfram Language expressions to deploy as TCP socket listeners. These can be any expressions supported by [GenerateHTTPResponse](http://reference.wolfram.com/language/ref/GenerateHTTPResponse.html). The file is outlined in the form:

    ```
    {
    	{ port1, expr1 },
    	{ port2, expr2 },
    	...
    }
    ```

    Each expression will be deployed as a listener on the corresponding port, each being deployed using a different parallel kernel (up to the number your core count allows). This allows the ability to asynchronously make request to the different ports.

2. deploy.wls

    This script file will install and initialize the LocalDeploy and then deploy the expressions defined inside `expressions.wl`.

## Linting

ESLint and Prettier are both enabled which are linters that flag errors, improper syntax, suspicious constructs and stylistic errors.

## Initial setup checklist

This section outlines a checklist of all steps needed to set up a new project using this template.

1. Configure `package.json`
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
5. Build your application
