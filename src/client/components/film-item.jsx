// @flow

import React from 'react';
import injectSheet from 'react-jss';
// import propTypes from 'prop-types';
import defaultThumb from '../images/default_thumb.png';
import { Link } from 'react-router-dom';


type Props = {
	title: string,
	genres: Array<string>,
	release_date: string,
	vote_average: string,
	poster_path: string
}

const styles = {
	filmItem: {
		margin: '20px 0 0 40px',
    display: 'block',
		width: '200px',
		textDecoration: 'none',
		color: '#000',
		position: 'relative',
	}
	
}

const Film = ({classes, title, genres, release_date, vote_average, poster_path, id}: Props) => {

	const genreList = genres && genres.map((item,i) => {
		return (i > 0 ? ', ':'') + item;
	});

	return (
		<Link to={`/film/${id}`} className={classes.filmItem}>
		
			<div className="filmItem__rating">{vote_average}</div>
			<img src={poster_path ? poster_path : defaultThumb } className="filmItem__img" />
			<div className="filmItem__description">
					<div className="filmItem__title">{title}</div>
					<div className="filmItem__releaseYear">{release_date.split('-')[0]}</div>
			</div>
			<div className="filmItem__genre">{genreList}</div>
	
		</Link>
	)
}

export const FilmItem =  injectSheet(styles)(Film);

// FilmItem.propTypes = {
// 	title: propTypes.string.isRequired,
// 	release_date: propTypes.string.isRequired,
// 	poster_path: propTypes.string,
// 	genres: propTypes.array,
// }