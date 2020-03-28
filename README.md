# fooddata-central

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> Node.js client and API types for [USDA FoodData Central](https://fdc.nal.usda.gov/).

FoodData Central is an API provided by the [U.S. Department of Agriculture](https://www.usda.gov/) that provides expanded nutrient profile data for foods.

## Getting Started

```bash
yarn add fooddata-central
```

## Prerequisites

An API key is required to interact with the FoodData Central API. Sign-up for an [API key](https://fdc.nal.usda.gov/api-key-signup.html).

## Usage

```js
import Client from "fooddata-central";

(async () => {
  // initialize a new client
  const client = new Client({ api_key: "API_KEY" });

  // search foods based on an input
  const results = await client.search({ generalSearchInput: "raw broccoli" });

  if (results.success) {
    // get details for food item
    const details = await client.details(results.data.foods[0].fdcId);

    if (details.success) {
      console.log(details.data);
    }
  }
})();
```

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/fooddata-central.svg?color=blue
[npm-url]: https://npmjs.com/package/fooddata-central
[build]: https://travis-ci.com/metonym/fooddata-central.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/fooddata-central
