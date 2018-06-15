import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, fetchFilmsAsync } from '../actions';
import {FilmList} from '../components';

const mapStateToProps = (state) => (
    {...state.filmState}
)

const mapDispatchToProps = (dispatch) => ({
    // onShowFilmDetails: (value) => dispatch(showFilmDetails(value))
    onSearch: (filterData) => dispatch(fetchFilmsAsync(filterData))
})

export const FilmListContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmList);