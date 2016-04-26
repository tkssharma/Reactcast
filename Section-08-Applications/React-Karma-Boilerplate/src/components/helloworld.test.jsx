import { renderIntoDocument, isCompositeComponentWithType, isElementOfType } from 'react-addons-test-utils';
import { assert } from 'chai';
const React = require('react');
const ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <div><Title text={this.props.name}/></div>;
  }
});

const Title = ({ text }) => (<h1 className="title">{text}</h1>)

describe('Hello Message', () => {
    it('Hello Message renders as composite component of type HelloMessage', () => {
        const HelloComponent = renderIntoDocument(<HelloMessage name="testName"/>);
        assert.equal(isCompositeComponentWithType(HelloComponent, HelloMessage), true)
    });

    it('Hello Message instance is created properly', () => {
        assert.equal(isElementOfType(<HelloMessage/>, HelloMessage), true)
    });
});