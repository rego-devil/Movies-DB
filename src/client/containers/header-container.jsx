import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms } from '../actions';
import {Header} from '../components';

const mapStateToProps = (store) => ({
    currentFilmDetails: store.filmState.currentFilmDetails
})

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (bool) => dispatch(showFilmDetails(bool)),
    onSearch: () => dispatch(asyncGetFilms())
})

export const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(Header);