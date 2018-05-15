import React from 'react';
import { connect } from 'react-redux';
import {FilmList} from '../components';

// console.log(connect);

const mapStateToProps = (store) => {
    console.log('fff');
    return {
        filmList: store.filmState.films
    }
}

export default connect(mapStateToProps)(FilmList);