# Platzi Conf Merch

## Project from the Professional React Hooks Course

This project was created from scratch following the next process

---

### Install React and react-dom

```npm
>npm i react react-dom
```

---

### Basic folder setup

Generate the basic folder structure and files:

- public/index.html
- src/index.js
- src/components/App/index.js

---

### Configure Webpack and Babel

Install **Webpack** dependencies to use for the project packaging

```npm
>npm i -D webpack webpack-cli webpack-dev-server
```

Install **HTML plugin and loader** so the project can deploy the necessary html to dist

```npm
>npm i -D html-webpack-plugin html-loader
```

Install **Babel** dependencies so the project can compile to use in any browser

```npm
>npm i -D babel-loader @babel/preset-env @babel/preset-react @babel/core
```

Generate the Webpack and Babel configuration files

- ./webpack.config.js
- ./.babelrc

Then after setup this configurations add the start and build scripts to package.json
