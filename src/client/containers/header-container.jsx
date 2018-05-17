import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, asyncGetFilms } from '../actions';
import {Header} from '../components';

const mapStateToProps = (store) => ({
    currentFilmDetails: store.filmState.currentFilmDetails
})

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (obj) => dispatch(showFilmDetails(obj)),
    onSearch: (filterData) => dispatch(asyncGetFilms(filterData))
})

export const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(Header);