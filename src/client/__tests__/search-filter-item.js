import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {SearchFilterItem} from '../components/search-filter-item';
// import toJson from 'enzyme-to-json';

describe('Search Filter item component', () => {

    test('renders without crashing', () => {
        const wrapper = shallow(<SearchFilterItem />);
        expect(wrapper).toMatchSnapshot();
    });

    test('render component with prop', () => {
        const wrapper = shallow(<SearchFilterItem isActive={true} />);
        expect(wrapper.find('.search__filterItem').hasClass('search__filterItem--active')).toEqual(true);
    });
});