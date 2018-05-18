import React from 'react';

export const FilmSort = ({count}) => (
  <div className="filmInfo">
		<div className="filmInfo__count">{count} 
			{count == 1 ? ' film is found': ' films are found'  }
		</div>
		<div className="filmInfo__sortBy">Sort by: 
			<span className="filmInfo__sortByActive">release date</span>
			<span>rating</span>
		</div>
	</div>
)