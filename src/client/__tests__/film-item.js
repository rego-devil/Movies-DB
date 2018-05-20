import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {FilmItem} from '../components/film-item';
// import toJson from 'enzyme-to-json';

describe('film Item component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<FilmItem />);
        expect(wrapper).toMatchSnapshot();
    });

    // test('click event', () => {
    //     const wrapper = shallow(<FilmItem  />);
    //     // wrapper.find('.filmItem').simulate('click');
    // });
});