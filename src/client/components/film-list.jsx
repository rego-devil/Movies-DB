import React from 'react';
import {FilmItem, FilmSort} from './';

export class FilmList extends React.Component {
	constructor() {
		super();
	}

	render() {
		const {filmList, onShowFilmDetails, onSelectFilm} = this.props;		
		return (
			filmList.length > 0 ? (
				<React.Fragment>
				<FilmSort />
				<ul className="filmList">
					{
						filmList.map((item) => 
							<li key={item.id} className="filmItem" onClick={() =>  onShowFilmDetails(item) }>
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


