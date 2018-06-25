// @flow

import React from 'react';
import injectSheet from 'react-jss';
// import propTypes from 'prop-types';
import defaultThumb from '../../images/default_thumb.png';
import styles from './styles';


type Props = {
	title: string,
	genres: Array<string>,
	release_date: string,
	vote_average: string,
	poster_path: string
}


const Film = ({classes, title, genres, release_date, vote_average, poster_path}: Props) => {

	const genreList = genres && genres.map((item,i) => {
		return (i > 0 ? ', ':'') + item;
	});

	return (
		
		<div className={classes.item}>
			<div className={classes.rating}>{vote_average}</div>
			<img src={poster_path ? poster_path : defaultThumb } className={classes.img} />
			<div className={classes.description}>
				<div className={classes.title}>{title}</div>
				<div className={classes.year}>{release_date.split('-')[0]}</div>
			</div>
			<div className={classes.genre}>{genreList}</div>
		</div>
	)
}

const FilmItem = injectSheet(styles)(Film);

export default FilmItem;

// FilmItem.propTypes = {
// 	title: propTypes.string.isRequired,
// 	release_date: propTypes.string.isRequired,
// 	poster_path: propTypes.string,
// 	genres: propTypes.array,
// }