# Platzi Conf Merch

## Project from the Professional React Hooks Course

This project was created from scratch following the next process

---

### Install React, react-dom and react-router-dom

```npm
%> npm i react react-dom react-router-dom

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
%> npm i -D webpack webpack-cli webpack-dev-server
```

Install **HTML plugin and loader** so the project can deploy the necessary html to dist

```npm
%> npm i -D html-webpack-plugin html-loader
```

Install **Babel** dependencies so the project can compile to use in any browser

```npm
%> npm i -D babel-loader @babel/preset-env @babel/preset-react @babel/core
```

Generate the Webpack and Babel configuration files

- ./webpack.config.js
- ./.babelrc

Then after setup this configurations add the start and build scripts to package.json

```json
"start": "webpack serve --mode development",
"build": "webpack --mode production",
```

---

### Configure Styles preprocessor plugin

Install the css and sass loader

```npm
%> npm i -D css-loader sass-loader node-sass mini-css-extract-plugin
```

Then and configure it on webpack config to use sass styles into the project

```Js
{
  test: /\.(s*)css$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    'sass-loader',
  ],
}
```

If you want to use Less must install less loaders

```npm
%> npm i -D less less-loader
```

Then configure it on webpack config

```Js
{
	test: /\.less$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'less-loader'
	]
}
```

If you want to use Stylus must install it's loaders

```npm
%> npm i -D stylus stylus-loader
```

Then configure it on webpack config

```Js
{
	test: /\.styl$/,
	loader: [
		MiniCSSExtractPlugin.loader,
		'css-loader',
		'stylus-loader'
	]
}
```

---

### Configure Eslint and Prettier

Install eslint globally

```npm
%> npm i -g eslint
```

Install eslint into project dependencies

```npm
%> npm i -D eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Install prettier into project dependencies

```npm
%> npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

Generate the .prettierrc and .eslintrc files

Then add the trigger scripts to package.json

```json
"format": "prettier --write '{*.js,src/**/*.{js,jsx}}'",
"lint": "eslint src/ --fix"
```

Add Lint-staged and Husky to ensure commits quality

```npm
%> npx mrm lint-staged
```

After installed modify the package.json script to add needed files

```json
"simple-git-hooks": {
  "pre-commit": "npx lint-staged"
},
"lint-staged": {
	"src/**/*.{html,ts,js,jsx,json,css,scss}": [
		"eslint --cache --fix",
		"prettier --write",
		"git add"
	]
}
```

If hook doesn't deploy before commit, must register this configuration with the next command

```npm
%> npx simple-git-hooks
```

### Icons library

To use icons inside the project, you can install the React [Fortawesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react) library

For core Icons

```npm
%> npm i @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons
```

For additional styles

```npm
%> npm i @fortawesome/free-brands-svg-icons @fortawesome/free-regular-svg-icons
```

---

### [Professor repository](https://github.com/platzi/platzi-conf-store/tree/RH-google-address)

---

### [ClassNotes](https://github.com/platzi/platzi-conf-store/tree/RH-google-address)

Thanks to [Fernando Quinteros Gutierrez](https://platzi.com/p/fernando-quinteros-gutierrez/)
