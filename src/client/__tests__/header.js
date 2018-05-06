import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Header} from '../components/header';

describe('Header  component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<Header  />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render button "Back to searh"  ', () => {
        const wrapper = mount(<Header showFilmDetails={true} /> );
        expect(wrapper.find('.header__backToSearch').exists()).toEqual(true);
    });

});