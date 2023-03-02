import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FilmCard = ({ film }) => {
  const [displayBack, setDisplayBack] = useState(false);
  return (
    <div
      className='movie-card-container'
      onClick={() => setDisplayBack(!displayBack)}
    >
      <ReactCardFlip
        isFlipped={displayBack}
        flipDirection='horizontal'
        containerClassName='card-settings'
      >
        <article className='movie-card'>
          <div className='film-card'>
            <h3>{film.title}</h3>
            <img
              src={'http://image.tmdb.org/t/p/w154' + film.poster_path}
              alt='Affiche'
            ></img>
            <p>
              {film.vote_average
                ? film.vote_average.toFixed(1) + '/10 ⭐'
                : '-'}
            </p>
          </div>
        </article>
        <div className='resume'>{film.overview}</div>
      </ReactCardFlip>
    </div>
  );
};

export default FilmCard;
