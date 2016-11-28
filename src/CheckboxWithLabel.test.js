import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import CheckboxWithLabel from './CheckboxWithLabel'

it('CheckboxWithLabel changes the text after click', () => {
    const checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="off"/>
    )

    const checkboxNode = ReactDOM.findDOMNode(checkbox)
    expect(checkboxNode.textContent).toEqual('off')
})

it('Clicked should be changes to on', () => {
    const checkbox = TestUtils.renderIntoDocument(
        <CheckboxWithLabel labelOn="On" labelOff="off"/>
    )

    const checkboxNode = ReactDOM.findDOMNode(checkbox)

    TestUtils.Simulate.change(
        TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    )

    expect(checkboxNode.textContent).toEqual('On')
})