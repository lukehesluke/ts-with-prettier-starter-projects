# ts-with-prettier-starter-projects/\<BRANCH NAME>

Fairly minimal TypeScript starter project. It contains:

- NVM is set to node LTS (at time of writing)
- TSConfig includes strict mode and is otherwise fairly standard
- ESLint with standard settings
- Prettier with standard settings and set to be used by VSCode for formatting

That's it. Bye 🦧

## Using this Starter Project

1. `git clone` this project
2. `git switch <BRANCH NAME>` to switch to this branch
3. Replace the git repo with `rm -rf .git && git init`
4. Update `.name` and `.description` in `package.json`
5. Rename "YOUR PROJECT" in the next section
6. Remove this first section of the README.md
7. hav fun 🍌

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

## Testing

```sh
npm test
```

This checks for errors with ESLint, Prettier and TypeScript Compiler.
