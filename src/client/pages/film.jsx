import React from 'react';
import { FilmListContainer, CurrentFilmContainer, FilmSortContainer, SearchContainer } from '../containers';

export const FilmPage = (props) => {
//   {throw  new Error('I crashed!')}
  return (
    <React.Fragment>
        <div className="header">
            <div className="wrapper">
                <SearchContainer {...props} />
            </div>
        </div>
        <div className="main">
            <div className="wrapper">  
                {/* <FilmSortContainer /> */}
                {/* <FilmListContainer /> */}
                <CurrentFilmContainer {...props} />
            </div>
        </div>
    </React.Fragment>
  )
}