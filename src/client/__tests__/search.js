import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Search } from '../components/search';

describe('Search component', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });

  test('setState ', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.state('search')).toEqual('');
    expect(wrapper.find('.search__input').prop('value')).toEqual('');

    wrapper.setState({ search: 'Some text in input' });

    expect(wrapper.find('.search__input').prop('value')).toEqual('Some text in input');
  });

  test('input data in textBox', () => {
    const wrapper = mount(<Search />);
    wrapper.find('.search__input').simulate('change', {
      target: { value: 'Input some text' },
    });

    expect(wrapper.state('search')).toBe('Input some text');
  });
});
