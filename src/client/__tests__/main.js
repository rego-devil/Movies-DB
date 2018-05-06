import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Main} from '../components/main';

describe('Main  component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<Main  />);
        expect(wrapper).toMatchSnapshot();
    });


});