import React from 'react';
import {Context} from './context';

export class FilmItem extends React.Component { 
	constructor() {
		super();

		this._onShowFilmDetails = this._onShowFilmDetails.bind(this);
	}

	_onShowFilmDetails() {
		this.props.onShowFilmDetails(true);
	}

	render() {
		const {title, genre, date, imgUrl} = this.props;
		return (
			<div className="filmItem" onClick={this._onShowFilmDetails} >

				<img src={imgUrl} className="filmItem__img" />
				<div className="filmItem__description">
						<div className="filmItem__title">{title}</div>
						<div className="filmItem__releaseYear">{date}</div>
				</div>
				<div className="filmItem__genre">{genre}</div>

			</div>
		)
	}
	
}