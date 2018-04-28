import React from 'react';
import {Search, FilmDetails} from './';
import filmDetails from '../data/film-details.json';

console.log(filmDetails);

export const Header = () => (
  <div className="header">
      <div className="wrapper">
        	<div className="header__siteName">netflixroullete</div>
        	<div className="header__title">Find your Movie</div>
			    {/* <Search /> */}
          <FilmDetails {...filmDetails}  />
      </div>
  </div>
)