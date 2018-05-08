import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Header} from '../components/header';
import { wrap } from 'module';

describe('Header  component', () => {

    const minProps = {
        showFilmDetails: true,
        onShowFilmDetails: () => {} 
    }

    test('renders without crashing', () => {
        const wrapper = shallow(<Header  />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render button "Back to searh"  ', () => {
        const wrapper = mount(<Header showFilmDetails={true} /> );
        expect(wrapper.find('.header__backToSearch').exists()).toEqual(true);
    });

    test('click button "Back to searh"  ', () => {
        const wrapper = mount(<Header {...minProps} /> );
        wrapper.find('.header__backToSearch').simulate('click');
    });

});