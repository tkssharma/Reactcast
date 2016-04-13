var React = require('react')
var ReactDOM = require('react-dom')
   var HelloWorld = React.createClass({displayName: "HelloWorld",
        render: function() {
            return (
                React.createElement("div", null,
                    React.createElement("h1", null, "Hello World"),
                    React.createElement("p", null, "This is some text")
                )
                );
        }
    });

    ReactDOM.render(React.createElement(HelloWorld, null), document.body);
