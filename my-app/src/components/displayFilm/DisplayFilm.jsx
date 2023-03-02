import FilmCard from '../filmcard/FilmCard';
import './DisplayFilm.css';

function DisplayFilm({ filmList }) {
  return (
    <section className='movies-section'>
      {filmList.slice(0, 8).map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </section>
  );
}

export default DisplayFilm;
