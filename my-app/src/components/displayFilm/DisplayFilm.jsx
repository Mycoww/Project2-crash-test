import './DisplayFilm.css';
// import PropTypes from 'prop-types';

function DisplayFilm({ filmList }) {
  return (
    <section className='movies-section'>
      {filmList.slice(0, 8).map((film) => (
        <article className='movie-card' key={film.id}>
          <div>
            <h3>{film.title}</h3>
            {/* Résumé : {film.overview} */}
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
      ))}
    </section>
  );
}

export default DisplayFilm;
