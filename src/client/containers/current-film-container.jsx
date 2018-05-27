import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms } from '../actions';
import {FilmDetails} from '../components';

const mapStateToProps = (store, ownProps) => {
    return {
        ...ownProps.match.params,
        ...store.filmState.currentFilmDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onShowFilmDetails: (obj) => dispatch(showFilmDetails(obj)),
        getFilm: (id) => dispatch(asyncGetFilms(id))
    }
}

export const CurrentFilmContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmDetails);