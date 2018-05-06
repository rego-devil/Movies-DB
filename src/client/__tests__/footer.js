import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Footer} from '../components/footer';

describe('Header  component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<Footer  />);
        expect(wrapper).toMatchSnapshot();
    });


});