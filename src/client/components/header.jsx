import React from 'react';
import {Search, FilmDetails} from './';
import {Context} from './context';

export class Header extends React.Component {

    render() {
        const {currentFilmDetails, onShowFilmDetails, onSearch} = this.props;
        console.log(currentFilmDetails);
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="header__siteName">netflixroullete
                        { 
                            currentFilmDetails ? (
                                <button className="header__backToSearch" onClick={() => onShowFilmDetails(null)}>Back to search</button>
                            ) : '' 
                        }
                    </div>
                    {
                        currentFilmDetails ? 
                            <FilmDetails {...currentFilmDetails}  /> : <Search onSearch={onSearch} />
                    }
                </div>
            </div>
        )
    }
    
}