# :house: Alluga.me/Web Application

## Instalation
After clone/download this repository install dependencies.

Of course U're using [Yarn](https://yarnpkg.com/), right?!

```sh
cd <path>/web-application
yarn
```

U can also install using NPM.

```sh
cd <path>/web-application
npm install
```

## Guide
### Keep everything clean and simple
- No semi-colons;
- No useless curly brackets;
- No double quotes;
- Margin 80 characters;

```js
// Right
const isObject = value => value && typeof value === 'object'
const isEmpty = object => isObject(object) && Object.keys(object).length === 0

// Wrong
function isObject(value) {
  if (value === null) {
    return false;
  }

  return typeof value === "object";
}

function isEmpty() {
  let keys = Object.keys(object);

  if (keys.length === 0) {
    return true;
  } else {
    return false;
  }
}
```

### Components
- Use **kebab-case** components on SFC templates;

```vue
<template lang="pug">
  - // Right
  market-shelf(:id='id')

  - // Wrong
  MarketShelf(:id='id')
  Market-Shelf(:id='id')
  marketShelf(:id='id')
</template>
```
