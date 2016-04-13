var React = require('react')
var ReactDOM = require('react-dom')
var style = require('style');

/*var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
*/

     var MyComponent = React.createClass({
            render: function() {
                return <div>
                        <h1 className="{style.h1}" >{this.props.text}</h1>
                        <p>{this.props.children}</p>
                </div>;
            }
        });

        ReactDOM.render(<div>
                    <MyComponent text="Hello World"  name="Hello World"  >
                    This is a hello.
                    </MyComponent>
                    <MyComponent text="How are You?">
                    This is a how are you.
                    </MyComponent>
                    <MyComponent text="Goodbye">
                    This is a goodbye.
                    </MyComponent>
                    </div>
            , document.getElementById('app'));


