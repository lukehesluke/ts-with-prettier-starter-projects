# ts-browser-starter

Fairly minimal browser TypeScript starter project. It contains:

- NVM is set to node LTS (at time of writing)
- TSConfig includes strict mode and is otherwise fairly standard
- ESLint with standard settings
- Prettier with standard settings and set to be used by VSCode for formatting
- Webpack and SWC for building TypeScript files -> JavaScript
  - It uses content hashing so that changes can be seen when refreshing the page in a caching browser
- html-webpack-plugin is used to build a minimal HTML page which calls the built JavaScript files
- React.js with `.tsx` files **in the [`with-react`](../../tree/with-react) branch**.

That's it. Bye 🦧

## Using this Starter Project

1. Fork this project
2. Update `.name` and `.description` in `package.json`
3. Update `<title>` in `src/index.html`
4. Remove this first section of the README.md
5. Rename "YOUR PROJECT" in the next section
6. hav fun 🍌

## How it was made

1. Following the Webpack guides:
   1. https://webpack.js.org/guides/getting-started/
   2. https://webpack.js.org/guides/typescript/
2. And then the SWC/Webpack guide:
   1. https://github.com/swc-project/swc-loader
3. Adding html-webpack-plubin
4. Following this guide for enabling ESLint and Prettier in a TypeScript project:
   1. https://khalilstemmler.com/blogs/tooling/prettier/
5. And then configuring `tsconfig.json` to enable lots of features (e.g. `downLevelIteration`) and to use `strict` mode.

# YOUR PROJECT

## Set-up

```sh
nvm use # Pre-requisite: Have NVM
npm install
```

## Running

```sh
npm run build
npm run serve
```

## Running (dev commands)

- In one terminal, build and watch for changes: `npm run build:watch`
- In another terminal, serve the app to `http://localhost:8080` with `npm run serve`

## Testing

```sh
npm test
```

This checks for errors with ESLint, Prettier and TypeScript Compiler.

**Note** that building uses SWC, rather than TypeScript Compiler and so does not find type errors.
