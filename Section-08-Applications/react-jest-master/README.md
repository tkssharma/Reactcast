# React-Jest

[Jest](https://facebook.github.io/jest/) practice. These two Jest tutorials are included.

* [Getting Started](https://facebook.github.io/jest/docs/getting-started.html#content)
* [Tutorial - React](https://facebook.github.io/jest/docs/tutorial-react.html#content)

## Table of Contents

* [Getting Started](#getting-started)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Commands](#commands)
  * [`server`](#server)
  * [`build`](#build)
  * [`test`](#test)
  * [`clean`](#clean)
* [Notes](#notes)
  * [Modules](#modules)
  * [Unmocked Files](#unmocked-files)
* [CHANGELOG](#changelog)
* [LICENSE](#license)

## Getting Started

Install dependencies:

```sh
$ npm install
```

Build application:

```sh
$ npm run build
```

Start server:

```sh
$ npm run server
```

Navigate to **[http://localhost:3000](http://localhost:3000)** to view the app.

## Tech Stack

* [Express](http://expressjs.com/)
* [React](https://facebook.github.io/react/index.html)
* [Babel 6](https://babeljs.io/)
* [ESLint](http://eslint.org/)
* [Webpack](https://webpack.github.io/)
* [Jest](https://facebook.github.io/jest/)

## Project Structure

```sh
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── dist/
│   └── bundle.js
├── index.html
├── package.json
├── server.js
├── src/
│   ├── app.js
│   └── components/
├── tests/
│   └── components/
└── webpack.config.js
```

## Commands

### server

```sh
$ npm run server
```
Starts the Express server. When root route (`/`) is hit, the server sends `index.html`.

### build

```sh
$ npm run build 
```
Builds the entire application for production.

> `.babelrc` needs to reference `es2015` and `react` presets.

### test

```sh
$ npm test
```

Runs tests via Jest, displays code coverage in the terminal and browser. 

> `.babelrc` needs to reference `es2015` and `react` presets.

### clean 

```sh
$ npm run clean 
```
Removes `dist/` and `coverage/`.

## Notes 

### Modules 

The source modules need to use `module.exports`. The ES2015 syntax of `export default` doesn't work. Also, the test modules need to use `require` to load the module being tested. Using `import` for the tested module doesn't work.

### Unmocked Files

Jest configuration in `package.json` must include this unmocked module:

```json
"jest": {
  "unmockedModulePathPatterns": [
    "<rootDir>/node_modules/fbjs"
  ]
}
```
See this [issue comment](https://github.com/facebook/jest/issues/554#issuecomment-148783188).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE.md)
