![Website](https://img.shields.io/website?style=flat-square&url=http%3A%2F%2Fjohan-mouchet.com) ![Netlify](https://img.shields.io/netlify/7fdfd6f4-e67a-4460-b69d-98bd88e189f8?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/JohanMouchet?color=%231DA1F2&style=flat-square)

# [johan-mouchet.com](https://www.johan-mouchet.com/)

Johan Mouchet's portfolio, open sourced on [GitHub](https://github.com/JohanMouchet/johan-mouchet.com).

## About This Website

This website is,

- Bootstrapped with Next.js
- Built with React
- Pulling data from Prismic using [GraphQL](https://johan-mouchet.prismic.io/graphql) and Apollo
- Maintaining a design system with [Storybook](https://master--656484aff9c2354775ca2c1b.chromatic.com/), deployed with Chromatic
- Type-checked with TypeScript
- Unit and snapshot tested with Vitest and React Testing Library
- Using CSS Modules, Sass and post-processing
- Linted with ESlint and Stylelint; formatted with Prettier; enforced by Husky and lint-staged
- Deployed, pre-rendered, with Netlify

## npm Scripts

In the project directory, you can `pnpm` + :

- `dev`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `storybook`: Runs [Storybook](https://storybook.js.org/), _an open source tool for developing UI components in isolation_. Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.
- `test`: Launches the [Vitest](https://vitest.dev/) test runner in the interactive watch mode.
- `type-check`: Runs [TypeScript](https://www.typescriptlang.org/), as a static type checker.
- `lint:js`: Runs the [ESLint](https://eslint.org/) linter, _a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs_.
- `lint:css`: Runs the [stylelint](https://stylelint.io/) linter, _a mighty, modern linter that helps you avoid errors and enforce conventions in your styles_.
- `format`: Runs ESLint and stylelint with the `--fix` option, as well as [Prettier](https://prettier.io/) with the `--write` option to automatically fix problems.
- `analyze`: Runs [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) to analyze, and debug JavaScript and Sass code bloat through source maps.
- `build`: Builds the app for production to the `.next` folder.
- `build:storybook`: Builds Storybook for production to the `storybook-static` folder.
- `build:all`: Builds both the app and Storybook for production to the respective folders.
- `codegen`: Generates TypeScript types for the Prismic GraphQL schema, requires to set a `PRISMIC_CUSTOM_TYPES_API_TOKEN` environment variable.
