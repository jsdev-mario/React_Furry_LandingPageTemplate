import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    shallow, mount
} from 'enzyme'
import { CurrentCity}  from './index';

describe('Test Menu Component', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = mount(<Router><CurrentCity/></Router>);
    })
    test('cities initialization', () => {
        expect(Object.keys(wrapper.find(CurrentCity).state().cities).length).toBeGreaterThan(0);
    })
})