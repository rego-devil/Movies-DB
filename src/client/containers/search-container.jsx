import React from 'react';
import { connect } from 'react-redux';
import { choiceSearchBy, asyncGetFilms, fetchFilmsAsync } from '../actions';
import {Search} from '../components';

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps,
        ...store.filmState
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSearchBy: (value) => dispatch(choiceSearchBy(value)),
    onSearch: (filterData) => dispatch(fetchFilmsAsync(filterData))
})

export const SearchContainer =  connect(mapStateToProps, mapDispatchToProps)(Search);