import React from 'react';
import { connect } from 'react-redux';
import { showFilmDetails } from '../actions';
import {Header} from '../components';

const mapStateToProps = (store) => ({
    showFilmDetails: store.statusState.showFilmDetails
})

const mapDispatchToProps = (dispatch) => ({
    onShowFilmDetails: (bool) => dispatch(showFilmDetails(bool))
})

export const HeaderContainer =  connect(mapStateToProps, mapDispatchToProps)(Header);