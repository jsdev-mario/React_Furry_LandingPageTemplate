import React from 'react';
import {Login} from './index';
import {
  mount,
  shallow
} from 'enzyme';

describe('Testing Login Component', () => {

    let wrapper = mount(<Login/>);

    test('OnChange called', () => {
        // user input
        const userInput = wrapper.find('#user');
        userInput.simulate('change', {
            target: {
                value: 'bernie'
            }
        });
        expect(wrapper.state().user).toBe('bernie')

        // pass input
        const passInput = wrapper.find('#password');
        passInput.simulate('change', {
            target: {
                value: 'test'
            }
        });
        expect(wrapper.state().password).toBe('test')
    });
});
