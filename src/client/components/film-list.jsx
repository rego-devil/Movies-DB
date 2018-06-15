import React from 'react';
import {FilmItem} from './';
import Loading from './loading';
import { Link } from 'react-router-dom';

export class FilmList extends React.Component { 

	constructor(props) {
		super(props);

		this.filmWrapper = React.createRef();
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const {searchField, searchBy, onSearch, isFetching, total, perPage, count} = this.props;
		const currentHeight = this.filmWrapper.current.clientHeight;

        
    if(window.scrollY > currentHeight - (window.innerHeight - 240))  {

      if(!isFetching &&  total > count  ) {
				const countOnPage = count + perPage;
				onSearch({search: searchField, searchBy, limit: countOnPage})
			}
    }

	}

	componentWillReceiveProps(nextProps) {
		
		const {sortOrder, sortBy} = this.props;

		if(nextProps.sortOrder !== sortOrder || nextProps.sortBy !== sortBy ) {
			this.sortfilm(nextProps.sortOrder, nextProps.sortBy);
		}

	}

	sortfilm = (sortOrder, sortBy) => {

		this.props.films.sort((a,b) => {
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
					<ul className="filmList" ref={this.filmWrapper}>
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


