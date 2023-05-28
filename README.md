# ts-with-prettier-starter-projects/nodejs

Fairly minimal NodeJS TypeScript starter project. It contains:

- NVM is set to node LTS (at time of writing)
- TSConfig includes strict mode and is otherwise fairly standard
- ESLint with standard settings
- Prettier with standard settings and set to be used by VSCode for formatting

That's it. Bye 🦧

## Using this Starter Project

1. `git clone` this project
2. Replace the git repo with `rm -rf .git && git init`
3. Update `.name` and `.description` in `package.json`
4. Rename "YOUR PROJECT" in the next section
5. Remove this first section of the README.md
6. hav fun 🍌

## How it was made

1. Following this guide for enabling ESLint and Prettier in a TypeScript project:
   1. https://khalilstemmler.com/blogs/tooling/prettier/
2. And then configuring `tsconfig.json` to enable lots of features (e.g. `downLevelIteration`) and to use `strict` mode.

# YOUR PROJECT

## Set-up

```sh
nvm use # Pre-requisite: Have NVM
npm install
```

## Running

```sh
npm run build
npm start
```

## Running (dev commands)

- Build and rebuild on file change: `npm run build:watch`
- Start and restart on build change: `npm run start:watch`

## Testing

```sh
npm test
```

This checks for errors with ESLint, Prettier and TypeScript Compiler.
