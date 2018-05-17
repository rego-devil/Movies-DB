import React from 'react';

export const FilmDetails = ({title, vote_average, release_date, runtime, genres, overview, poster_path, director, cast}) => (
  <div className="filmDetails">
    <img className="filmDetails__img"  src={poster_path} />
    <div className="filmDetails__overview">
      <div className="filmDetails__top">
        <div className="filmDetails__title">{title}</div>
        <div className="filmDetails__rating">{vote_average}</div>
      </div>
      <div className="filmDetails__middle">
        <div className="filmDetails__date">{release_date.split('-')[0]}</div>
        <div className="filmDetails__duration">{runtime ? runtime + ` min.` : ''}</div>
      </div>
      <div className="filmDetails__description">{overview}</div>
      {/* <div className="filmDetails__director">{director}</div>
      <div className="filmDetails__cast">{cast}</div> */}
      <div className="filmDetails__genres">
      {
        genres.map((item, i) => (i > 0 ? ', ':'') + item)
      }
      </div>
    </div>
  </div>
)