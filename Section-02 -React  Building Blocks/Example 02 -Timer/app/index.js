var React = require('react')
var ReactDOM = require('react-dom')

var TimerExample = React.createClass({

    getInitialState: function(){

        return { elapsed: 0 };
    },

    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){

        clearInterval(this.timer);
    },

    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);
        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);

        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
    }
});


ReactDOM.render(
    <TimerExample start={Date.now()} />,
    document.getElementById('app')
);
