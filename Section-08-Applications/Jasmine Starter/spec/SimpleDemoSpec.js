describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(6);
    });
});

/*toBeDefined / toBeUndefined
If you just want to make sure a variable or property is defined, there’s a matcher for that. There’s also one to confirm that a variable or property is undefined.
*/
it("is defined", function () {
    var name = "Andrew";
    expect(name).toBeDefined();
})

it("is not defined", function () {
    var name;
    expect(name).toBeUndefined();
});
/*toBeTruthy / toBeFalsy
If something should be true or false, these matchers will do it.
*/
it("is true", function () {
    expect(Lib.isAWeekDay()).toBeTruthy();
});
it("is false", function () {
    expect(Lib.finishedQuiz).toBeFalsy();
});
/*toBeLessThan / toBeGreaterThan
For all you number people. You know how these work:
*/
it("is less than 10", function () {
    expect(5).toBeLessThan(10);
});
it("is greater than 10", function () {
    expect(20).toBeGreaterThan(10);
});
/*toMatch
Have some output text that should match a regular expression? The toMatch matcher is ready and willing.
*/
it("outputs the right text", function () {
    expect(cart.total()).toMatch(/\$\d*.\d\d/);
});
/*toContain
This one is pretty useful. It checks to see if an array or string contains an item or substring.
*/
it("should contain oranges", function () {
    expect(["apples", "oranges", "pears"]).toContain("oranges");
});