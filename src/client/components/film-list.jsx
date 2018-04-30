import React from 'react';
import {FilmItem, FilmSort} from './';
import filmListJson from '../data/films.json';
import {Context} from './context';

export const FilmList = () => (
	<Context.Consumer>
		{
		    ({searching, onShowFilmDetails}) => (
				!searching ? <div className="noFilms">No films found</div> : (

					<React.Fragment>
						<FilmSort />
						<ul className="filmList">
							{
								filmListJson.map((item) => 
									<li key={item.id} className="filmItem" onClick={onShowFilmDetails.bind(null, true)}>
										<FilmItem {...item} />
									</li>
								)
							}
						</ul>
					</React.Fragment>
				)
			)
		}
	</Context.Consumer>
)