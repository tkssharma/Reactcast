
# React JS Starter app

A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES

JUST THE UI
Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it's easy to try it out on a small feature in an existing project.

VIRTUAL DOM
React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.

DATA FLOW
React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
Topics
================
- React JS components
- React js event handeling 
- Parent Child Components 
- Todo app using React 
- Cart app using React 

Application setup
==============
- App require NPM Node installed 

```Javascript
mkdir DemoApp
cd DemoApp
npm init
or just add this package json
{
  "name": "HelloWorld",
  "version": "0.0.1",
  "description": "HelloWorld",
  "main": "dist/index.js",
  "engines": {
    "node": ">=0.10.32"
  },
  "scripts": {
    "build": "webpack --progress --profile --colors",
    "watch": "webpack-dev-server --hot --inline --progress --colors",
    "test": "echo \"No unit tests and e2e tests yet\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "bugs": {
    "url": ""
  },
  "author": "Richard LOPES",
  "license": "MIT",
  "homepage": "",
  "dependencies": {
    "babel-preset-react": "^6.5.0",
    "babel-runtime": "5.6.18",
    "html-webpack-plugin": "^2.15.0",
    "react": "^15.0.0",
    "react-dom": "^15.0.0"
  },
  "devDependencies": {
    "babel-core": "5.6.18",
    "babel-loader": "5.3.1",
    "html-webpack-plugin": "1.6.0",
    "webpack": "1.12.1",
    "webpack-dev-server": "1.12.1"
  }
}

// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};

```


React JS 
====================
<a name="README">[<img src="https://avatars2.githubusercontent.com/reactjs-cn" width="50px" height="50px" />](https://github.com/kumartarun/React-JS-Starter-apps.git)</a>

Creating components
====================
```Javascript
var HelloWorld = React.createClass({
            render: function() {
                return (
                    <div>
                        <h1>Hello World</h1>
                        <p>This is some text</p>
                    </div>
                    );
            }
        });

        React.render(<HelloWorld />, document.body);
```

Event Handeling
====================
```Javascript

        var Checkbox = React.createClass({
            getInitialState: function() {
                return {checked: true}
            },
            handleCheck: function() {
                this.setState({checked: !this.state.checked})
            },
            render: function() {
                var msg;
                if(this.state.checked) {
                    msg = "checked";
                }
                else {
                    msg = "unchecked";
                }
                return (

      <div>
        <div>
          <h1 class="container well">hello react</h1>
             
             <input type="checkbox"
              defaultChecked={this.state.checked} onChange={this.handleCheck}/>
                        <p>This box is {msg}.</p>
      </div>
    </div>
   );
            }
        });

        React.render(<Checkbox/>,
            document.getElementById('react-container'));

``

Run the tutorial (each file is numbered)
====================
```Terminal
git clone https://github.com/kumartarun/React-JS-Starter-apps.git
Run index.html files on any local server
```

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://gennexttraining.herokuapp.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:tarun.softengg@gmail.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/tkssharma)