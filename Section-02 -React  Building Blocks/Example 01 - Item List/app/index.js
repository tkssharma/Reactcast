var React = require('react')
var ReactDOM = require('react-dom')

var services = [
    { name: 'Web Development', price: 300 },
    { name: 'Design', price: 400 },
    { name: 'Integration', price: 250 },
    { name: 'Training', price: 220 }
];

var ServiceChooser = React.createClass({

    getInitialState: function(){
        return { total: 0 };
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {
       //this.props.data
       //this.state.var
        var self = this;

        var services = this.props.items.map(function(s){
            return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
        });
        return <div>
                    <h1>Our services</h1>

                    <div id="services">
                        {services}

                        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>

                    </div>

                </div>;

    }
});


var Service = React.createClass({

    getInitialState: function(){
        return { active: false };
    },

    clickHandler: function (){
        var active = !this.state.active;
        this.setState({ active: active });
        this.props.addTotal( active ? this.props.price : -this.props.price );
    },

    render: function(){
        return  <p className={ this.state.active ? 'active' : '' } onClick={this.clickHandler}>
                    {this.props.name} <b>${this.props.price.toFixed(2)}</b>
                </p>;

    }

});


ReactDOM.render(
    <ServiceChooser items={ services } />,
    document.getElementById('app')
);


