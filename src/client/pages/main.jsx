import React from 'react';
import { FilmListContainer, SearchContainer, FilmSortContainer } from '../containers';

export const MainPage = (props) => {
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
                <FilmSortContainer />
                <FilmListContainer />
            </div>
        </div>
    </React.Fragment>
  )
}