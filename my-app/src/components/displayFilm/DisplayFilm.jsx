import './DisplayFilm.css';
// import PropTypes from 'prop-types';

function DisplayFilm({ filmList }) {
  return (
    <div className='displayFilm'>
      Liste des films trouvés :<br></br>
      <br></br>
      <ul>
        {filmList.map((film) => (
          <li key={film.id}>
            Titre : {film.title}, Date de sortie : {film.release_date}
            <br></br>Résumé : {film.overview}
            <br></br>
            <img
              src={'http://image.tmdb.org/t/p/w154' + film.poster_path}
              alt='Affiche'
            ></img>
            <br></br>
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayFilm;
