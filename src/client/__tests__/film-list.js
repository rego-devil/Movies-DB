import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {FilmList} from '../components/film-list';

describe('film List component', () => {

    const minProps = {
        films: [],
        onShowFilmDetails: ()=>{},
        isFetching: false
    }

    // test('renders without crashing', () => {
    //     const wrapper = shallow(<FilmList searching={true}  />);
    //     expect(wrapper).toMatchSnapshot();
    // });

    test('element with class ".filmList" exist', () => {
        const wrapper = shallow(<FilmList searching={true} />);
        expect(wrapper.find('.filmList')).toHaveLength(1);
    });

    test('element with class ".noFilms" exist', () => {
        const wrapper = shallow(<FilmList searching={false} />);
        expect(wrapper.find('.noFilms').exists()).toEqual(true);
    });

});