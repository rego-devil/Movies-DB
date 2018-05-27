import React from 'react';
import { connect } from 'react-redux';
import { choiceSearchBy, asyncGetFilms } from '../actions';
import {Search} from '../components';

const mapStateToProps = (store) => {
    return store.filmState
}

const mapDispatchToProps = (dispatch) => ({
    onSearchBy: (value) => dispatch(choiceSearchBy(value)),
    onSearch: (filterData) => dispatch(asyncGetFilms(filterData))
})

export const SearchContainer =  connect(mapStateToProps, mapDispatchToProps)(Search);