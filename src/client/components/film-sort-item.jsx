import React from 'react';


export const SortItem = ({sortBy, onSort, currentSortField, value, sortOrderLocal }) => (
	<span 
		className={`filmSort__item ${currentSortField === sortBy ? 'filmSort__item--active' : ''}`} 
		onClick={() => onSort({sortBy: currentSortField, sortOrder: sortOrderLocal}) } 
	>
		{value}
		{currentSortField === sortBy ? sortOrderLocal === 'asc' ? String.fromCharCode(8593) : String.fromCharCode(8595) : ''  }
	</span>
)