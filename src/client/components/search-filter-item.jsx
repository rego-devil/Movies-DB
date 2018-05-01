import React from 'react';
import {Context} from './context';

export const SearchFilterItem = ({name, onActive, isActive}) => (
	<span className={`search__filterItem ${isActive? 'search__filterItem--active':''}`}  onClick={onActive}>{name}</span>
)