import React from 'react';
import {FilmItem, FilmSort} from './';

export class FilmList extends React.Component {
	constructor() {
		super();

		this._onShowFilmDetails = this._onShowFilmDetails.bind(this);
	}

	_onShowFilmDetails() {
		this.props.onShowFilmDetails(true);
	}

	render() {
		const {filmList} = this.props;		
		return (
			filmList.length > 0 ? (
				<React.Fragment>
				<FilmSort />
				<ul className="filmList">
					{
						filmList.map((item) => 
							<li key={item.id} className="filmItem" onClick={this._onShowFilmDetails}>
								<FilmItem {...item} />
							</li>
						)
					}
				</ul>
				</React.Fragment>
			) : (
				<div className="noFilms">No films found</div>
			)
		)
	}
}


