import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms } from '../actions';
import {FilmDetails} from '../components';

const mapStateToProps = (store, ownProps) => {
    return {
        ...store.filmState.currentFilmDetails,
        ...ownProps.match.params
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEmptyCurrentFilm: (obj) => dispatch(currentFilm(obj)),
        getFilm: (id) => dispatch(asyncGetFilms(id))
    }
}

export const CurrentFilmContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmDetails);