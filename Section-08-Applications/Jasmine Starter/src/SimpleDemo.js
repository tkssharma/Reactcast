{
    function Demo(displayText, favouritePhrase) {
        this.phraseToDisplay = displayText;
        this.remeberedPhrase = favouritePhrase;
       	this.hasPhrasetoRemember = false;
	
    }

    Demo.prototype.displayThisPhrase = function (value) {
	if(value){
        	this.phraseToDisplay = value;
		
		}
	else { this.phraseToDisplay = "Hello World";
	}
    }

	Demo.prototype.updateValues= function (value){
	Demo.prototype.displayThisPhrase(value);
	}
	
	Demo.prototype.getValues= function (){
	Demo.prototype.getDisplayValue();
	}

	Demo.prototype.getDisplayValue= function (){
	 return this.phraseToDisplay;
	}

	
 	Demo.prototype.rememberThePhrase = function (value) {

	if(this.hasPhrasetoRemember){
		throw new Error("Already have a phrase");
		
	}
		this.hasPhrasetoRemember = true;
		this.remeberedPhrase = value;
	}
	


}