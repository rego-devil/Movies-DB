import React from 'react';
import { FilmListContainer, HeaderContainer, FilmSortContainer } from '../containers';

export const Main = (props) => {
//   {throw  new Error('I crashed!')}
  return (
    <React.Fragment>
        <HeaderContainer />
        <div className="main">
            <div className="wrapper">
                <FilmSortContainer />
                <FilmListContainer />
            </div>
        </div>
    </React.Fragment>
  )
}