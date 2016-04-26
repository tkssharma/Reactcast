/**
 * Dependencies
 */
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const expectJSX = require('expect-jsx');
const   CheckboxWithLabel  = require('./CheckboxWithLabel.jsx');


describe('CheckboxWithLabel', () => {

  it('changes the text after click', () => {
    // Render a checkbox with label in the document
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    // Verify that it's Off by default
    expect(checkboxNode.textContent).toEqual('Off');

    // Simulate a click and verify that it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );
    expect(checkboxNode.textContent).toEqual('On');
  });

});


/*import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

class TestComponent extends React.Component {}

describe('expect-jsx', () => {
  it('works', () => {
    expect(<div />).toEqualJSX(<div />);
    // ok

    expect(<div a="1" b="2" />).toEqualJSX(<div />);
    // Error: Expected '<div\n  a="1"\n  b="2"\n/>' to equal '<div />'

    expect(<span />).toNotEqualJSX(<div/>);
    // ok

    expect(<div><TestComponent /></div>).toIncludeJSX(<TestComponent />);
    // ok
  });
});*/