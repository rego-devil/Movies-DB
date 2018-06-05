import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms, currentFilm } from '../actions';
import {FilmDetails} from '../components';

const mapStateToProps = (store, ownProps) => {
    return {
        ...store.filmState,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEmptyCurrentFilm: (obj) => dispatch(currentFilm(obj)),
        getFilm: (id) => dispatch(asyncGetFilms(id))
    }
}

export const CurrentFilmContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmDetails);