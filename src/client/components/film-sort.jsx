import React from 'react';
import {SortItem} from '/';

const sortData = [
	{
		id: 1,
		value: 'release date',
		currentSortField: 'release_date'
	},
	{
		id: 2,
		value: 'rating',
		currentSortField: 'vote_average'
	},
]
export class FilmSort extends React.Component { 

	render() {
		const {total, sortBy, onSort, sortOrder} = this.props;
		const sortOrderLocal = (sortOrder === 'desc' ? 'asc' : 'desc'); 
		return (
			total ? (
				<div className="filmSort">
					<div className="filmSort__count">{total} 
						{total == 1 ? ' film is found': ' films are found'  }
					</div>
					<div className="filmSort__sortBy">
						Sort by:
						{
							sortData.map((item) => <SortItem key={item.id} {...item} {...this.props} sortOrderLocal={sortOrderLocal} /> )
						}
					</div>
				</div>
			) : ''
		)
	}
}