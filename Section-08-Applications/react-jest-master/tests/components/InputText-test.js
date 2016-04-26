/* global jest, describe, it, xit, expect */
jest.dontMock('../../src/components/InputText');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const InputText = require('../../src/components/InputText');


describe('InputText', () => {
  it('changes display text when field text changes', () => {
    const textComponent = TestUtils.renderIntoDocument(
      <InputText inputText="hello world" />
    );
    const textNode = ReactDOM.findDOMNode(textComponent);

    expect(textNode.textContent).toEqual('hello world');
    TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(textComponent, 'input'), {target: {value: 'hi!!!'}});
    expect(textNode.textContent).toEqual('hi!!!');
  });
});
