import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails, choiceSearchBy, asyncGetFilms } from '../actions';
import {Header} from '../components';

const mapStateToProps = (store) => ({
    ...store.filmState
})

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (obj) => dispatch(showFilmDetails(obj)),
    onSearchBy: (value) => dispatch(choiceSearchBy(value)),
    onSearch: (filterData) => dispatch(asyncGetFilms(filterData))
})

export const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(Header);