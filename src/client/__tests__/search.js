import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Search} from '../components/search';

describe('Search component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<Search  />);
        expect(wrapper).toMatchSnapshot();
    });

    test('setState ', () => {
        const wrapper = shallow(<Search  />);

        expect(wrapper.state('inputValue')).toEqual('');
        expect(wrapper.find('.search__input').prop('value')).toEqual('');

        wrapper.setState({ inputValue: 'Some text in input' });

        expect(wrapper.find('.search__input').prop('value')).toEqual('Some text in input');
        
    });
});