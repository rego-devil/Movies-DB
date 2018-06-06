import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms, currentFilm, fetchFilmByIDAsync } from '../actions';
import {FilmDetails} from '../components';

const mapStateToProps = (store, ownProps) => {
    return {
        ...store.filmState,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClearCurrentFilm: (obj) => dispatch(currentFilm(obj)),
        getFilm: (id) => dispatch(fetchFilmByIDAsync(id))
    }
}

export const CurrentFilmContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmDetails);