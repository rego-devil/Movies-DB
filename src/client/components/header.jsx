import React from 'react';
import {Search, FilmDetails} from './';
import filmDetails from '../data/film-details.json';
import {Context} from './context';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this._onShowFilmDetails = this._onShowFilmDetails.bind(this);
    }

    _onShowFilmDetails() {
        this.props.onShowFilmDetails(false);
    }

    render() {
        const {showFilmDetails, onShowFilmDetails, onSearch} = this.props;
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="header__siteName">netflixroullete
                        { 
                            showFilmDetails ? (
                                <button className="header__backToSearch" onClick={this._onShowFilmDetails}>Search</button>
                            ) : '' 
                        }
                    </div>
                    {
                        showFilmDetails ? 
                            <FilmDetails {...filmDetails}  /> : <Search onSearch={onSearch} />
                    }
                </div>
            </div>
        )
    }
    
}