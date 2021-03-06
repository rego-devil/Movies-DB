import React from 'react';
import FilmItem from './film-item';
import Loading from './loading';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export class FilmList extends React.Component { 

	constructor(props) {
		super(props);

		this.filmWrapper = React.createRef();
		this.state = { films: this.props.films}
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
				onSearch({search: searchField, searchBy, limit: count + perPage})
			}
    }

	}

	componentWillReceiveProps(nextProps) {
		const {sortOrder, sortBy, films, isFetching} = this.props;

		if(nextProps.sortOrder !== sortOrder || nextProps.sortBy !== sortBy || nextProps.films !== films ) {
			this.setState((prevState, props) => ({films: props.films }));
			// this.setState({films: this.props.films });
			
			this.sortfilm(nextProps.sortOrder, nextProps.sortBy);
			
		}

	}

	sortfilm = (sortOrder, sortBy) => {
		this.state.films.sort((a,b) => {
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
		const {isFetching, error, sortOrder, sortBy} = this.props;
		const {films} = this.state;
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
								<li key={item.id}>
									<Link to={`/film/${item.id}`} className="filmItem">
										<FilmItem {...item}  />
									</Link>
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

FilmList.propTypes = {
	films: propTypes.array,
	isFetching: propTypes.bool.isRequired,
	sortOrder: propTypes.string,
	sortBy: propTypes.string
}


