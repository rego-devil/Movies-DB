import React from 'react';
import {FilmList} from './';

export const Main = () => {
  // {throw  new Error('I crashed!')}
  return (
    <div className="main">
        <div className="wrapper">
          <FilmList />
        </div>
    </div>
  )
}