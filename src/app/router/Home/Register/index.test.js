import React from 'react';
import { Register } from './index'
import {
    mount, shallow
} from 'enzyme'

describe('Testing Register Component', () => {

    const wrapper = mount(<Register/>);

    test('OnChange called', () => {

        //full name change
        const fullNameInput = wrapper.find('#full_name');
        fullNameInput.simulate('change', {
            target: { value: 'Bernie Kenth'}
        });
        expect(wrapper.state().full_name).toEqual('Bernie Kenth');

        //email change
        const emailInput = wrapper.find('#email');
        emailInput.simulate('change', {
            target: { value: 'test@mail.com'}
        });
        expect(wrapper.state().email).toEqual('test@mail.com');

        //password
        const passwordInput = wrapper.find('#password');
        passwordInput.simulate('change', {
            target: { value: 'test pass'}
        });
        expect(wrapper.state().password).toEqual('test pass');
        
    })
})