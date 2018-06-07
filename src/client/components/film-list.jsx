import React from 'react';
import {FilmItem} from './';
import { Loading } from './loading';
import { Link } from 'react-router-dom';

export class FilmList extends React.Component { 

	componentWillReceiveProps() {
		
		const {sortOrder, sortBy, films} = this.props;
		films.sort((a,b) => {
			if( sortOrder === 'desc') {
				if (a[sortBy] > b[sortBy]) return -1;
				if (a[sortBy] < b[sortBy]) return 1;
			}
			if( sortOrder === 'asc') {
				if (a[sortBy] > b[sortBy]) return 1;
				if (a[sortBy] < b[sortBy]) return -1;
			}
			return 0;
		});

	}

	render() {
		const {films, isFetching, error, sortOrder, sortBy} = this.props;
	
		return (
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
	}
}


