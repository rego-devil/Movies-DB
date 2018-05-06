import React from 'react';
import {FilmItem, FilmSort} from './';
import filmListJson from '../data/films.json';
import {Context} from './context';

export class FilmList extends React.Component {
	constructor() {
		super();
	}

	render() {
		const {searching, onShowFilmDetails} = this.props;
		return (
			!searching ? (
				<div className="noFilms">No films found</div> 
			) : (
				<React.Fragment>
					<FilmSort />
					<ul className="filmList">
						{
							filmListJson.map((item) => 
								<li key={item.id}>
									<FilmItem {...item} onShowFilmDetails={onShowFilmDetails} />
								</li>
							)
						}
					</ul>
				</React.Fragment>
			)
		) 
	}
}


