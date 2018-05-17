import React from 'react';
import {Search, FilmDetails} from './';
import {Context} from './context';

export class Header extends React.Component {

    render() {
        const {currentFilmDetails, onShowFilmDetails, onSearch} = this.props;
        return (
            <div className="header">
                <div className="wrapper">
                    {
                        currentFilmDetails ? 
                            <FilmDetails {...currentFilmDetails} onShowFilmDetails={onShowFilmDetails}   /> : <Search onSearch={onSearch} />
                    }
                </div>
            </div>
        )
    }
    
}