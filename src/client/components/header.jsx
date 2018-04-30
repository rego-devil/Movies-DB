import React from 'react';
import {Search, FilmDetails} from './';
import filmDetails from '../data/film-details.json';
import {Context} from './context';

export const Header = () => (
    <Context.Consumer>
        {
		    ({showFilmDetails, onShowFilmDetails}) => (
                <div className="header">
                    <div className="wrapper">
                            <div className="header__siteName">netflixroullete
                                { showFilmDetails ? (
                                    <button className="header__backToSearch" onClick={onShowFilmDetails.bind(null, false)}>Search</button>
                                  ): '' 
                                }
                            </div>
                            { showFilmDetails ? <FilmDetails {...filmDetails}  /> : <Search /> }
                    </div>
                </div>
            )
        }
    </Context.Consumer>
)