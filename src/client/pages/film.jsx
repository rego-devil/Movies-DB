import React from 'react';
import { FilmListContainer, CurrentFilmContainer, FilmSortContainer } from '../containers';

export const FilmPage = (props) => {
//   {throw  new Error('I crashed!')}
  return (
    <React.Fragment>
        <div className="header">
            <div className="wrapper">
                <CurrentFilmContainer {...props} />
            </div>
        </div>
        <div className="main">
            <div className="wrapper">  
                {/* <FilmSortContainer />
                <FilmListContainer /> */}
            </div>
        </div>
    </React.Fragment>
  )
}