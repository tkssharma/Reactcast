/* global jest, describe, xit, it, expect */
jest.dontMock('../../src/components/CheckboxWithLabel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../../src/components/CheckboxWithLabel');

describe('CheckboxWithLabel', () => {
  it('changes the text after the click', () => {
    // get a rendered component
    const checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel onLabel="On" offLabel="Off" />
    );

    // get component node
    const checkboxNode = ReactDOM.findDOMNode(checkbox);

    // verify default label is 'Off'
    expect(checkboxNode.textContent).toEqual('Off');

    // simulate a click
    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input'));

    // verify the label is 'On'
    expect(checkboxNode.textContent).toEqual('On');
  });

  // maybe this shallow rendering is good for very simple components
  xit('can be tested via shallow rendering', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CheckboxWithLabel onLabel="On" offLabel="Off" />);

    const result = renderer.getRenderOutput();

    // `onChange` is set inside the `CheckboxWithLabel` module, so I can't match or stub it here!!
    expect(result.props.children).toEqual([
      <input type="checkbox" checked={false} onChange={() => {}} />,
      `Off`,
    ]);
  });
});

