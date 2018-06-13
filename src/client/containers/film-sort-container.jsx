import React from 'react';
import { connect } from 'react-redux';
import { sortByParameter } from '../actions';
import {FilmSort} from '../components';

const mapStateToProps = (store) => {
    return store.filmState
}

const mapDispatchToProps = (dispatch) => ({
    onSort: (value) => dispatch(sortByParameter(value))
})

export const FilmSortContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmSort);