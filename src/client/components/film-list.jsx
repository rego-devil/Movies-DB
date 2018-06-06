import React from 'react';
import {FilmItem} from './';
import { Loading } from './loading';
import { Link } from 'react-router-dom';

export const FilmList = ({films, isFetching, error}) => (
	<React.Fragment>
		{
			isFetching ? <Loading /> : ''
		}
		{
			films.length ? (
			<ul className="filmList">
				{
					films.map((item) => 
						<li key={item.id} className="filmItem">
							<Link to={`/film/${item.id}`} ><FilmItem {...item} /></Link>
						</li>
					)
				}
			</ul>
		) : (
			<React.Fragment>
				<div className="error">{error}</div>
				<div className="noFilms">No films found</div>
			</React.Fragment>
		)}
	</React.Fragment>
)


