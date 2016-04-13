var React = require('react')
var ReactDOM = require('react-dom')

var hello = React.createClass({
  render: function(){
    return ( <div onClick="this.props.fireclick"> Hello, {this.props.name}  
                <p></p>
               </div>
    )
  }
});
     var MyComponent = React.createClass({
            render: function() {
                return (<div>
                         <hello  fireclick="onclick()" name="sending to child container"></hello>
                        <h1>{this.props.text}</h1>
                        <p>{this.props.children}</p>
                        </div>)
            }
        })
        ReactDOM.render(
                    <MyComponent text="Hello World" text="Hello World 2" >
                    This is a hello.
                    </MyComponent>
            , document.getElementById('app'));
