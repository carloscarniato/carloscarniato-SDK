## Architecture

### 1. Entry point

The SDK has an entrypoint in `src/index.ts`, which is a class `LOTR` that uses typescript mixins to extends it's behavior making it easy to grow the SDK.
The `Base` class on `src/base.ts` takes `apiKey` argument, which is used to authenticate for the API requests.

### 2. Entities

Each entity classes (ex. `Movies`) is extended from the `Base` file in their own folders. These classes make calls to [The One API](https://the-one-api.dev/) using the authorized `request` method.
These entity classes have a series of methods that make HTTP requests to the LOTR API for operations like get all, get by id, etc.

### 3. Other

Each entity folder contains a `types` file which contains all the types for that specific entity. Unit tests are written using Jest, and are located in the `__tests__` and can be used with `test` script.
The `package.json` file contains a `build` script that compiles the TypeScript code to JavaScript.
The `isomorphic-fetch` package was added to ensure that the SDK can be used across many enviroments, without compatibility issues reagrding the fetch API
Also `microbundle` package was added to improve the build process and compile to multiple syntax, ensuring that the SDK can be used pretty much everywhere.
