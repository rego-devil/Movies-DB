import React from 'react';
import {FilmItem} from './';
import { Loading } from './loading';

export const FilmList = ({films, onShowFilmDetails, onSelectFilm, isFetching}) => (
	<React.Fragment>
		{isFetching ? <Loading /> : ''}
		{
			films.length > 0 ? (
			<ul className="filmList">
				{
					films.map((item) => 
						<li key={item.id} className="filmItem" onClick={() =>  onShowFilmDetails(item) }>
							<FilmItem {...item} />
						</li>
					)
				}
			</ul>
			
		) : (
			<div className="noFilms">No films found</div>
		)}
	</React.Fragment>
)


