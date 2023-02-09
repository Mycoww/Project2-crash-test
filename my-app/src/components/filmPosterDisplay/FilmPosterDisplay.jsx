import React, { useState, useEffect } from 'react';
import './FilmPosterDisplay.css';

const FilmPosterDisplay = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/76341?api_key=e5952f2708f5284e252d4e51b51aec21&results=30'
      );
      const data = await response.json();
      // console.log(data);
      setFilms(data);
    }
    fetchData();
    console.log(films);
  }, []);

  return (
    <section className='posterDisplay'>
      <ul>
        {Object.entries(films).map(([key, value]) => (
          <li key={key}>
            <img src={value.poster_path} alt='affiche' />
            <h4>{value.original_title}</h4>
            <p>toto test</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// const movie = [
//   {
//     posterUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fantomas_early_film_poster.jpg/220px-Fantomas_early_film_poster.jpg',
//     title: 'lorem lorem',
//   },
//   {
//     posterUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Fantomas_early_film_poster.jpg/220px-Fantomas_early_film_poster.jpg',
//     title: 'lorem lorem',
//   },
// ];

// const FilmPoster = ({ movie }) => {
//   return (
//     <div>
//       <img src={movie.posterUrl} alt={movie.title} />
//       <p>{movie.title}</p>
//     </div>
//   );
// };

// const FilmPosterDisplay = ({ movies }) => {
//   return (
//     <div>
//       {movies.slice(0, 30).map((movie) => (
//         <FilmPoster key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

export default FilmPosterDisplay;
