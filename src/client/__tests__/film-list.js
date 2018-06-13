import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { FilmList } from '../components/film-list';

describe('film List component', () => {
  let renderedComponent;
  const minProps = {
    films: [{ id: 1, title: 'default', release_date: '2018' }],
    onShowFilmDetails: () => {},
    isFetching: false,
  };


  test('renders without crashing', () => {
    const renderedComponent = shallow(<FilmList {...minProps} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  test('element with class ".filmList" exist', () => {
    const renderedComponent = shallow(<FilmList {...minProps} />);
    expect(renderedComponent.find('.filmList').length).toBe(1);
  });

  test('element with class ".noFilms" exist', () => {
    const renderedComponent = shallow(<FilmList films={[]} />);
    expect(renderedComponent.find('.noFilms').exists()).toEqual(true);
  });
});
