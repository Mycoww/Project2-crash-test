import './App.css';
import Header from './components/header/Header';
import Questionnaire from './components/question/Questionnaire';
import Footer from './components/footer/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TagSelection from './components/tag/Tag';
import DisplayFilm from './components/displayFilm/DisplayFilm';

function App() {
  const [myData, setMyData] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const getData = () => {
    let genresList = '';
    for (let i = 0; i < selectedTags.length; i++) {
      genresList = genresList + selectedTags[i];
      if (i !== selectedTags.length - 1) {
        genresList = genresList + ',';
      }
    }
    // Send the request
    const myUrl =
      'https://api.themoviedb.org/3/discover/movie?api_key=e5952f2708f5284e252d4e51b51aec21&language=fr&with_genres=' +
      genresList;
    console.log('Url appelée : ' + myUrl);
    axios
      .get(myUrl)
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setMyData(data.results);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  useEffect(() => {
    // Faire une requête à l'API ici avec les tags sélectionnés
    console.log('Entrée dans UseEffect => Appel API');
    getData();
  }, [selectedTags]);

  return (
    <div className='App'>
      <Header />
      <Questionnaire
        allQuestionsAnswered={allQuestionsAnswered}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <TagSelection
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <div className='question-section'>
        <DisplayFilm filmList={myData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
