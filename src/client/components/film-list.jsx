import React from 'react';
import {FilmItem, FilmSort} from './';
import { Loading } from './loading';

export class FilmList extends React.Component {
	constructor() {
		super();
	}

	render() {
		const {filmList, onShowFilmDetails, onSelectFilm, isFetching} = this.props;		
		return (
			<React.Fragment>
				{isFetching ? <Loading /> : ''}
				{filmList.length > 0 ? (
					<React.Fragment>
					<FilmSort count={filmList.length} />
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
					<React.Fragment>
						<div className="noFilms">No films found</div>
					</React.Fragment>
				)}
			</React.Fragment>
		)
	}
}


