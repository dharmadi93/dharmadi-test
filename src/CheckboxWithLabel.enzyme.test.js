import React from 'react'
import {shallow} from 'enzyme'
import ChecboxWithLabel from './CheckboxWithLabel'

it('ChecboxWithLabel change the text after click', () => {
    const checkbox = shallow(
        <ChecboxWithLabel labelOn="On" labelOff="Off"/>
    )

    expect(checkbox.text()).toEqual('Off')

    checkbox.find('input').simulate('change')

    expect(checkbox.text()).toEqual('On')
})