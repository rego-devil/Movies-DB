import React from 'react';
import propTypes from 'prop-types';
import defaultThumb from '../images/default_thumb.png';


export const FilmItem = ({title, genres, release_date, vote_average, poster_path}) => {

	let genreList = genres.map((item,i) => {
		return (i > 0 ? ', ':'') + item;
	});

	return (
		<React.Fragment>
			<div className="filmItem__rating">{vote_average}</div>
			<img src={poster_path ? poster_path : defaultThumb } className="filmItem__img" />
			<div className="filmItem__description">
					<div className="filmItem__title">{title}</div>
					<div className="filmItem__releaseYear">{release_date.split('-')[0]}</div>
			</div>
			<div className="filmItem__genre">{genreList}</div>
		</React.Fragment>
	)
}

FilmItem.propTypes = {
	title: propTypes.string.isRequired,
	release_date: propTypes.string.isRequired,
	poster_path: propTypes.string,
	genres: propTypes.array,
}