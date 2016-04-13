var React = require('react')
var ReactDOM = require('react-dom')

var FriendsContainer = React.createClass({
	render: function(){
		var name = 'Tyler McGinnis'
		var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
		return (
			<div>
				<h3> Name: {name} </h3>
				<ShowList names={friends} />
			</div>
		)
	}
});

var ShowList = React.createClass({
	render: function(){
		var listItems = this.props.names.map(function(friend){
			return <li> {friend} </li>;
		});
		return (
			<div>
				<h3> Friends </h3>
				<ul>
					{listItems}
				</ul>
			</div>
		)
	}
});
ReactDOM.render(<FriendsContainer />, document.getElementById('app'));

/*

 var ProfilePic = React.createClass({
   render: function() {
     return (
       <img src={'https://photo.fb.com/' + this.props.username} />
     )
   }
 })
 var ProfileLink = React.createClass({
   render: function() {
     return (
       <a href={'https://www.fb.com/' + this.props.username}>
         {this.props.username}
       </a>
     )
   }
 })
 var Avatar = React.createClass({
   render: function() {
     return (
       <div>
         <ProfilePic username={this.props.username} />
         <ProfileLink username={this.props.username} />
       </div>
     )
   }
 })

 ReactDOM.render( <Avatar username="tylermcginnis" />, document.getElementById('app'));

*/


/*

var Container = React.createClass({
  render: function () {
    return (
      <Wrapper>
        <Welcome name={'Tyler'}/>
        <Hello />
      </Wrapper>
    )
  }
});

var Wrapper = React.createClass({
  render: function () {
    return (
      <div style={{backgroundColor: 'pink'}}>
        <h1> Header! </h1>
        {this.props.children}
      </div>
    )
  }
});

var Welcome = React.createClass({
  render: function () {
    return <div>Welcome {this.props.name}!</div>
  }
});

var Hello = React.createClass({
  render: function () {
    return <div>Hello ReactJS Program!</div>
  }
})

ReactDOM.render(<Container />, document.getElementById('app'));*/
