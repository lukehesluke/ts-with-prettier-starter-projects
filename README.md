_Last updated: 2025-04-06_

# ts-with-prettier-starter-projects

A small collection of fairly minimal [TypeScript](https://www.typescriptlang.org/) starter projects that include [Prettier](https://prettier.io/).

Each starter project is contained within a git branch.

These include:

- [`nodejs`](../../tree/nodejs) - to create an application for [Node.js](https://nodejs.org/en).
- [`browser`](../../tree/browser) - to create an application for the browser, building with [webpack](https://webpack.js.org/) and [SWC](https://swc.rs/).
- [`browser-with-react`](../../tree/browser-with-react) - to create an application for the browser, building with [webpack](https://webpack.js.org/) and [SWC](https://swc.rs/); and using, as framework, [React](https://react.dev/) with `.tsx` files.

## Contributing

The branches are organized in a tree like so:

* [`base`](../../tree/base)
    * [`nodejs`](../../tree/nodejs)
    * [`browser`](../../tree/browser)
         * [`browser-with-react`](../../tree/browser-with-react)

If making changes to functionality across multiple branches, be sure to make the changes to the root branch that includes them all and then merge that root into each child branch.
