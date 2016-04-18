var React = require('react')
var ReactDOM = require('react-dom')
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

        ReactDOM.render(<Checkbox/>,
            document.getElementById('app'));
