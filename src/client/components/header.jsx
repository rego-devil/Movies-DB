import React from 'react';
import {Search, FilmDetails} from './';

export class Header extends React.Component {

    render() {
        const {currentFilmDetails, onShowFilmDetails, onSearch, searchBy, onSearchBy} = this.props;
        console.log(this.props);
        return (
            <div className="header">
                <div className="wrapper">
                    {
                        currentFilmDetails ? 
                            <FilmDetails {...currentFilmDetails} onShowFilmDetails={onShowFilmDetails}   /> 
                        :
                            <Search onSearch={onSearch} searchBy={searchBy} onSearchBy={onSearchBy} />
                    }
                </div>
            </div>
        )
    }
    
}