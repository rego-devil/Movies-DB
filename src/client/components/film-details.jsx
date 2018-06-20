// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

type Props = {
	currentFilmDetails: { poster_path: string, title: string, vote_average: number, runtime: number, genres: Array<string>, overview: string, release_date: string},
	onClearCurrentFilm: (null | {}) => void,
  isFetching: bool,
  getFilm: (value: number) => void,
  match: { params: {id: number}}
}
export class FilmDetails extends React.Component<Props> {
  
  componentWillMount() {
    this.props.getFilm(this.props.match.params.id);
  }

  render() {
    const { currentFilmDetails, onClearCurrentFilm, isFetching } = this.props;

    if (!currentFilmDetails) { return null; }
    
    return (
      <div className="filmDetails">

        <img className="filmDetails__img" src={currentFilmDetails.poster_path} />
        <div className="filmDetails__overview">
          <div className="filmDetails__top">
            <div className="filmDetails__title">{currentFilmDetails.title}</div>
            <div className="filmDetails__rating">{currentFilmDetails.vote_average}</div>

            <Link to="/">
              <button className="filmDetails__backToSearch" onClick={() => onClearCurrentFilm(null)}>
                  Back to search
              </button>
            </Link>

          </div>
          <div className="filmDetails__middle">
            <div className="filmDetails__date">{currentFilmDetails.release_date && currentFilmDetails.release_date.split('-')[0]}</div>
            <div className="filmDetails__duration">{currentFilmDetails.runtime ? `${currentFilmDetails.runtime} min.` : ''}</div>
          </div>
          <div className="filmDetails__description">{currentFilmDetails.overview}</div>
          <div className="filmDetails__genres">
            {
            currentFilmDetails.genres && currentFilmDetails.genres.map((item, i) => (i > 0 ? ', ' : '') + item)
          }
          </div>
        </div>
      </div>


      // currentFilmDetails ? (
      //     result
      // ) : (isFetching ?
      //   <React.Fragment>
      //     { console.log('----3----')}
      //     <Loading />
      //   </React.Fragment> : '')

    );
  }
}


