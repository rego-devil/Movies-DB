import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {filmReducer} from '../reducers/films';
// import toJson from 'enzyme-to-json';

describe('>>>R E D U C E R', () => {

    it('+++ reducer for GET_FILMS_SUCCESS', () => {
        let state = {
            films: [],
            count: 0
        }
        state = filmReducer(state,{type:"GET_FILMS_SUCCESS", payload: [{}, {}], count: 2})
        expect(state).toEqual({count: 2, films: [{}, {}], isFetching: false})
    });
});