![Website](https://img.shields.io/website?style=flat-square&url=http%3A%2F%2Fjohan-mouchet.com) ![Netlify](https://img.shields.io/netlify/7fdfd6f4-e67a-4460-b69d-98bd88e189f8?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/JohanMouchet?color=%231DA1F2&style=flat-square)

# [johan-mouchet.com](https://www.johan-mouchet.com/)

Johan Mouchet's portfolio, open sourced on [GitHub](https://github.com/JohanMouchet/johan-mouchet.com).

## About This Website

This website is,

- bootstrapped with Create React App
  - including React, webpack, Babel and more
- pulling data from Prismic with [GraphQL](https://johan-mouchet.prismic.io/graphql)
- published as an offline-first Progressive Web App
- maintaining a design system with [Storybook](https://www.johan-mouchet.com/storybook/?path=/docs/about-getting-started--page)
- type-checked with TypeScript
- unit and snapshot tested with Jest and React Testing Library
- using Sass and CSS post-processing
- linted and formated with ESlint, stylelint and Prettier, enforced by Husky and lint-staged
- using client-side routing with [wouter](https://github.com/molefrog/wouter)
- deployed, pre-rendered, with Netlify

## npm Scripts

In the project directory, you can `npm run`:

- `start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `storybook`: Runs [Storybook](https://storybook.js.org/), _an open source tool for developing UI components in isolation_. Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.
- `test`: Launches the Jest test runner in the interactive watch mode. 
Individual scripts are also available as `build` and `build:storybook`.
- `type-check`: Runs [TypeScript](https://www.typescriptlang.org/), as a static type checker.
- `lint:js`: Runs the [ESLint](https://eslint.org/) linter, _a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs_.
- `lint:css`: Runs the [stylelint](https://stylelint.io/) linter, _a mighty, modern linter that helps you avoid errors and enforce conventions in your styles_.
- `analyze`: Runs [source-map-explorer](https://www.npmjs.com/package/source-map-explorer) to analyze, and debug JavaScript and Sass code bloat through source maps.
- `format`: Runs ESLint and stylelint with the `--fix` option, as well as [Prettier](https://prettier.io/) with the `--write` option to automatically fix problems.
- `build:all`: Builds the app and Storybook for production to the respective folders: `build` and `storybook-static`. 
