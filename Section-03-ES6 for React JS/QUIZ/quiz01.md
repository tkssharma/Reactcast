ES6 Quiz No : 01 Let Arrow Function Default Function
==========================================
Use let in this example .

function loadProfiles(userNames){
  var message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    var profiles = data.profiles;
    _addToPage(profiles);
  });
}

What is the outcome of the following code?

let name = "Jerry Only";
name = "Glenn Danzig";
console.log( name );


What is the outcome of the following code?

let topic = "The latest news in JavaScript";
let topic = "The latest news in ES2015";
console.log( topic );




let message = "web forum";

function printInCaps(value){
  let message = value.toUpperCase();
  return message;
}

printInCaps("profiles");

console.log( message );



function loadProfiles(userNames){

  const MAX_USERS;
  MAX_USERS = 15;

  if(userNames.length > MAX_USERS){
  	return false;
  }
  
  for(let i=0; i < userNames.length; i++){
  	_fetchProfile(userNames[i], function(data){
    	_addToSidebar(userNames[i], data);
    });
  }
}

Default Function
function displayTopicsPreview( topics ){
  var message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}

function setPageThread(name,  ){
  let nameElement = _buildNameElement(name);
  let settings = _parseSettings(popular, expires, activeClass);

  _updateThreadElement(nameElement, settings);
}



function loadProfiles(userNames = [], options = {}) {
  let profilesClass = options.profilesClass || ".user-profile";
  let reverseSort   = options.reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}





function setPageThread(name, {popular, expires, activeClass} = {}){
  // ...
}
setPageThread(“ES2015”, {
  popular: true
});
setPageThread(“ES2015”, {});
setPageThread(“ES2015”);



function appendUserNames(  ){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in arguments){
    let name = arguments[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}



let printName = function(value){
  console.log( value );
}

let printName => (value) {
  console.log( value );
}

printName(value) => {
  console.log( value );
}

let printName = (value) => {
  console.log( value );
}


