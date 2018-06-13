import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { FilmSort } from '../components/film-sort';

describe('film Sort component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<FilmSort />);
    expect(wrapper).toMatchSnapshot();
  });
});
