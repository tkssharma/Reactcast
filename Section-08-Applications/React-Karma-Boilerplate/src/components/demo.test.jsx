const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

const expectJSX = require('expect-jsx');

expect.extend(expectJSX);

class TestComponent extends React.Component {}

describe('checking the functionality of Expect JSX', () => {

  it('Testing expectJSX functionality ', () => {
    expect(<div />).toEqualJSX(<div />);
    // ok
    expect(<div a="1" b="2" />).toNotEqualJSX(<div />);
    // ok Now
    expect(<span />).toNotEqualJSX(<div/>);
    // ok
    expect(<div><TestComponent /></div>).toIncludeJSX(<TestComponent />);
    // ok
  });
});