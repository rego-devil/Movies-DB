import React from 'react';

const sortData = [
	{
		id: 1,
		value: 'release date',
		sortByField: 'release_date'
	},
	{
		id: 2,
		value: 'rating',
		sortByField: 'vote_average'
	},
]
export class FilmSort extends React.Component { 

	state = {
		sortOrder: 'desc'
	}

	changeSortOrder = () => {
		this.setState({
			sortOrder: this.state.sortOrder === 'desc' ? 'asc' : 'desc'
		});
	}

	render() {
		const {count, sortBy, selectSortBy} = this.props;
		const {sortOrder} = this.state;
		return (
				count ? (
					<div className="filmSort">
						<div className="filmSort__count">{count} 
							{count == 1 ? ' film is found': ' films are found'  }
						</div>
						<div className="filmSort__sortBy">Sort by: 
							{
								sortData.map(({id,value,sortByField}) => (
									<span key={id} 
										className={`filmSort__item ${sortByField === sortBy ? 'filmSort__item--active' : ''}`}
										onClick={() => {this.changeSortOrder(); selectSortBy({sortBy: sortByField, sortOrder})} } 
									>
										{value}
										{sortByField === sortBy ? sortOrder === 'desc' ? String.fromCharCode(8593) : String.fromCharCode(8595) : ''  }
									</span>
								))
							}
						</div>
					</div>
				) : ''
		)
	}
}