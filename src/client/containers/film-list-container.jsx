import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails } from '../actions';
import {FilmList} from '../components';

const mapStateToProps = (store) => (
    {...store.filmState}
)

const mapDispatchToProps = (dispatch) => ({
    // onShowFilmDetails: (value) => dispatch(showFilmDetails(value))
})

export const FilmListContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmList);