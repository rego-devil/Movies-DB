import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { FilmDetails } from '../components/film-details';

describe('film Item component', () => {
  let renderedComponent;
  const minProps = {
    title: 'default',
    genres: [],
    release_date: '1939-08-15',
    vote_average: 8,
    poster_path: 'ulrToImg',
    runtime: '',
  };

  test('+++ Match snapshot', () => {
    const renderedComponent = shallow(<FilmDetails {...minProps} />);
    expect(renderedComponent).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const renderedComponent = shallow(<FilmDetails {...minProps} />);
    expect(renderedComponent.length).toEqual(1);

    // console.log(renderedComponent.debug());
  });

  test('Check runtime condition', () => {
    let renderedComponent,
      runtime;

    runtime = 128;
    renderedComponent = shallow(<FilmDetails {...minProps} runtime={runtime} />);
    expect(renderedComponent.find('.filmDetails__duration').text()).toEqual(`${runtime} min.`);

    runtime = '';
    renderedComponent = shallow(<FilmDetails {...minProps} runtime={runtime} />);
    expect(renderedComponent.find('.filmDetails__duration').text()).toEqual(runtime);

    // console.log(renderedComponent.debug());
  });

  // test('click event', () => {
  //     const wrapper = shallow(<FilmItem  />);
  //     // wrapper.find('.filmItem').simulate('click');
  // });
});
