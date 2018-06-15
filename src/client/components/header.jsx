// import React from 'react';
// import propTypes from 'prop-types';
// import {Search, FilmDetails} from './';
// import { FilmSortContainer } from '../containers';


// export const Header = ({currentFilmDetails, onShowFilmDetails, onSearch, searchBy, onSearchBy}) => (
//     <div className="header">
//         <div className="wrapper">
//             {
//                 currentFilmDetails ? 
//                     <FilmDetails {...currentFilmDetails} onShowFilmDetails={onShowFilmDetails} /> 
//                 :
//                     <Search onSearch={onSearch} searchBy={searchBy} onSearchBy={onSearchBy} />
//             }
//         </div>
//     </div>
// )

// Header.propTypes = {
// 	currentFilmDetails: propTypes.object,
// 	onShowFilmDetails: propTypes.func,
// 	onSearch: propTypes.func,
//     searchBy: propTypes.string,
//     onSearchBy: propTypes.func,
// }