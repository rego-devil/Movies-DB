import React from 'react';
import {Header, FilmList} from '../components';
import { FilmListContainer, HeaderContainer } from '../containers';

export const Main = (props) => {
//   {throw  new Error('I crashed!')}
  return (
    <React.Fragment>
        <HeaderContainer />
        <div className="main">
            <div className="wrapper">
                <FilmListContainer />
            </div>
        </div>
    </React.Fragment>
  )
}