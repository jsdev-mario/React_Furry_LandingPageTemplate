import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    shallow, mount
} from 'enzyme'
import { Menu}  from './index';

describe('Test Menu Component', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = mount(<Router><Menu/></Router>);
    })
    test('cities initialization', () => {
        expect(Object.keys(wrapper.find(Menu).state().cities).length).toBeGreaterThan(0);
    })
})