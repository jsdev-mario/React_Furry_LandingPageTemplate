import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    shallow, mount
} from 'enzyme'
import { TargetCity}  from './index';

describe('Test Menu Component', () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = mount(<Router><TargetCity/></Router>);
    })
    test('cities initialization', () => {
        expect(Object.keys(wrapper.find(TargetCity).state().cities).length).toBeGreaterThan(0);
    })
})