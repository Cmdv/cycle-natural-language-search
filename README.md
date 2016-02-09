# Cycle Natural Language search

NLP search bar using the Natural + Brain.js

## Installation

```javascript
npm install //install dependencies
```


## Usage

To start the Cycle app:
```javascript
npm start //start webpack-dev-server with cycle + hot reload
```

To start the NLP-API server:
```javascript
npm run server
```

## Tests

when you have Cycle app running, open new terminal window and:

```javascript 
npm test //start testem + tape
```
For tests to run properlly and hot reloading, make sure you have both npm scripts running at the same time!

## Dependencies

[Cyclejs](http://cycle.js.org/) - View for our app

[Natural](https://github.com/NaturalNode/natural) - NLP for the language recognition

[BrainJS](https://github.com/harthur/brain) - The Neural network for machine learning

[tape](https://github.com/substack/tape) - tap-producing test harness for node and browsers

[testem](https://github.com/airportyh/testem) - test runner

[webpack](https://github.com/airportyh/testem) - a bundler for JavaScript

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - updates browsers on changes

[babel](https://github.com/babel/babel) - compiler for converting ES6
