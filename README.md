A simple Javascript SDK for the [One API](https://the-one-api.dev/) Movie entity.

## Installation

```sh
npm i @carloscarniato/lotr-sdk
```

### Authentication

To use the LOTR SDK, you need to provide an `apiKey`. This key is available for free on the [One API](https://the-one-api.dev/sign-up) website.

### Usage

```js
import LOTR from '@carloscarniato/lotr-sdk';

const sdk = new LOTR('<API_KEY>');

sdk.getMovies()
  .then((movies) => {
    // handle data
  })
  .catch((err) => {
    // handle error
  });
```

### Methods

```js
sdk.getMovies()
sdk.getMovieById()
sdk.getQuotesByMovieId()
```

### Test

```js
npm run test
```