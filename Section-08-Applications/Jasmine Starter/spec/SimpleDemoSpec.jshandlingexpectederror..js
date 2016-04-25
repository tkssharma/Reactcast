
//this is the suite
describe("Simple demo", function() {
 	
 
 //this is the spec
  it("says hello world if an empty string is specified", function() {

	var demo = new Demo();
//toEqual is a matcher
    demo.displayThisPhrase();
	expect(demo.phraseToDisplay).toEqual("Hello World");
 });


//the not and another matcher
it("says hello world if an empty string is specified", function() {

	var demo = new Demo();
//toBeNull is a matcher  but also using not
    demo.displayThisPhrase();
	expect(demo.phraseToDisplay).not.toBeNull();
 });

describe("updateValues() Test", function() {
	 var test;
 	beforeEach(function() { test = new Demo(); spyOn(test, 'updateValues'); });   
    	afterEach (function() { test = undefined;    });
    it("calls the updateValues function", function() {
        //var demo = new Demo();
        
        test.updateValues("test string");
        expect(test.updateValues).toHaveBeenCalled();
	expect(test.updateValues).toHaveBeenCalledWith("test string");
    });

	
});
//demonstrates use of expected exceptions
  describe("Use of already selected favourite error", function() {
    it("should throw an exception if a phrase has already been remembered", function() {
      var demo = new Demo();

	demo.rememberThePhrase("test phrase");
	

      expect(function() {
        demo.rememberThePhrase("another phrase");
      }).toThrowError("Already have a phrase");
    });
  });

});
