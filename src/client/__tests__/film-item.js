import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {FilmItem} from '../components/film-item';
// import toJson from 'enzyme-to-json';

describe('film Item component', () => {
    let renderedComponent;
    const minProps = {
        title: 'default',
        genres: [],
        release_date: '2018',
        vote_average: 8,
        poster_path: 'ulrToImg'
    }

    beforeEach(()=>{
        renderedComponent = shallow(<FilmItem {...minProps} />)
    });

    test('+++ Match snapshot', () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    test('renders without crashing', () => {
        expect(renderedComponent.length).toEqual(1);

        // console.log(renderedComponent.debug());
    });

    // test('click event', () => {
    //     const wrapper = shallow(<FilmItem  />);
    //     // wrapper.find('.filmItem').simulate('click');
    // });
});