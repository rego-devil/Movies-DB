import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {filmReducer} from '../reducers/films';
// import toJson from 'enzyme-to-json';

describe('>>>R E D U C E R', () => {
    const initialState = {
        isFetching: false,
        films: [
            {
                release_date: '2001'
            },
            {
                release_date: '2007'
            },
            {
                release_date: '2004'
            },
            {
                release_date: '2010'
            },
            {
                release_date: '2001'
            },
            {
                release_date: '2010'
            }
        ],
        currentFilmDetails: null,
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder: 'desc',
        count: 0
    }

    it('+++ reducer for GET_FILMS_SUCCESS', () => {
        const payload = [{},{}];
        const count = 2;
    
        const state = filmReducer(initialState,{type:"GET_FILMS_SUCCESS", payload, count})
        expect(state).toEqual({...initialState, isFetching: false, films: payload, count: count})
    });

    it('+++ reducer for SHOW_FILM_DETAILS', () => {
        const payload = {title: 'Film'};

        const state = filmReducer(initialState,{ type:"SHOW_FILM_DETAILS", payload})
        expect(state).toEqual({...initialState,  currentFilmDetails: payload})
    });

    it('+++ reducer for CHOICE_SEARCH_BY', () => {
        const payload = 'genres';

        const state = filmReducer(initialState,{ type:"CHOICE_SEARCH_BY", payload})
        expect(state).toEqual({...initialState,  searchBy: payload})
    });

    it('+++ reducer for START_FETCH_FILMS_REQUEST', () => {
        const state = filmReducer(initialState,{ type:"START_FETCH_FILMS_REQUEST"})
        expect(state).toEqual({...initialState,  isFetching: true})
    });

    it('+++ reducer for SORT_FILMS', () => {

        const payload = {
            sortBy: 'release_date',
            sortOrder: 'desc'
        }

        const state = filmReducer(initialState,{ type:"SORT_FILMS", payload});
        expect(state).toEqual({...initialState, sortBy: payload.sortBy, sortOrder: payload.sortOrder});
        
    });

    it('+++ sort asc', () => {

        const payload = {
            sortBy: 'release_date',
            sortOrder: 'asc'
        }

        filmReducer(initialState,{ type:"SORT_FILMS", payload});
        
    });

    it('+++ undefined type', () => {

        const state = filmReducer(initialState,{ type:"SORT_UNDEFINED", payload: null});
        expect(state).toEqual(initialState);
    });
});