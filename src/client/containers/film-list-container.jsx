import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails } from '../actions';
import {FilmList} from '../components';

const mapStateToProps = (store) => {
    return {
        filmList: store.filmState.films
    }
}

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (bool) => dispatch(showFilmDetails(bool))
})

export const FilmListContainer =  connect(mapStateToProps, mapDispatchToProps)(FilmList);