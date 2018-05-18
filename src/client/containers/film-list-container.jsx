import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails } from '../actions';
import {FilmList} from '../components';

const mapStateToProps = (store) => {
    return {
        filmList: store.filmState.films,
        isFetching: store.filmState.isFetching
    }
}

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (value) => dispatch(showFilmDetails(value))
})

export const FilmListContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmList);