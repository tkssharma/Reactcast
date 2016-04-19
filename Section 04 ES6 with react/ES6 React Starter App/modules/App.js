import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {

  render(){
    let txt = this.props.txt
    let catcount = this.props.cat;
    return <h1>{txt} {catcount}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string.isRequired,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
  txt: 'this is the default txt for text props '
}

ReactDOM.render(
  <App  cat={5} />,
  document.getElementById('app')
);