import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Header} from '../components/header';

describe('Header  component', () => {
    let renderedComponent;

    const minProps = {
        showFilmDetails: true,
        onShowFilmDetails: () => {} 
    }

    beforeEach(()=>{
        renderedComponent = shallow(<Header {...minProps} />)
    });

    test('+++Match snapshot', () => {
        expect(renderedComponent).toMatchSnapshot();
    });

    test('renders without crashing', () => {
        expect(renderedComponent.length).toEqual(1);
    });

    test('render with various props"  ', () => {
        
        let renderedComponent = shallow(<Header currentFilmDetails={null} />);
        expect(renderedComponent.find('Search').length).toBe(1);


        renderedComponent = shallow(<Header currentFilmDetails={{}} />);
        expect(renderedComponent.find('FilmDetails').length).toBe(1);

        console.log(renderedComponent.debug());
    });

});