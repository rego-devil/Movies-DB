import React from 'react';
import {Context} from './context';
import { Link } from 'react-router-dom';

const getUrlParameter = (name, query) => {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	const results = regex.exec(query);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
export class Search extends React.Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);


		let search = '';

		if(this.props.location.search) {
			
			search = getUrlParameter('search', this.props.location.search);
			const searchBy = getUrlParameter('searchBy', this.props.location.search);
			const limit = getUrlParameter('limit', this.props.location.search);
		
			this.props.onSearch({search, searchBy, limit})	
		}

		this.state = {
			search: search,
		}
		
	}

	handleInput(e) {
		this.setState({search: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) })
	}


	handleKeyPress = (event) => {
		const {search} = this.state;
		const {onSearch, searchBy} = this.props;

		event.key == 'Enter' ? onSearch({search, searchBy}) : ''
	}


	render() {
		const {search} = this.state;
		const {onSearch, onSearchBy, searchBy, perPage} = this.props;
		return (
			<div className="search">
				<div className="search__title">Find your Movie</div>
				<input type="text" className="search__input" value={search} onChange={this.handleInput} onKeyPress={this.handleKeyPress} />
				<div className="search__bottom">
					<div className="search__filter">
						<span className="search__filterText">Search By:</span>
						{ 
							['title', 'genres'].map((item, i) => {
								return <span key={item} 
										className={`search__filterItem ${item===searchBy ? 'search__filterItem--active':''}`}
										onClick={() => onSearchBy(item)}>
									{item}
								</span>
							})
						}
					</div>

					<Link to={`/search?search=${search}&searchBy=${searchBy}&limit=${perPage}`}>
						<button className="search__button" onClick={() => onSearch({search, searchBy, limit: perPage})}>Search</button>
					</Link>
				</div>
			</div>
		)
	}
}
