import './App.css';
import Header from './components/header/Header';
import Questionnaire from './components/question/question';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [myData, setMyData] = useState('');
  console.log(myData);
  const getData = () => {
    // Send the request

    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=e5952f2708f5284e252d4e51b51aec21&with_people=3'
        //'https://api.themoviedb.org/3/search/movie?api_key=e5952f2708f5284e252d4e51b51aec21&query=Avatar'
        // 'https://api.themoviedb.org/3/movie/76341?api_key=e5952f2708f5284e252d4e51b51aec21'
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setMyData(data.results);
      });
  };

  return (
    <div className='App'>
      <Header />
      <Questionnaire />
      <input type='text' id='film'></input>
      <button type='button' onClick={getData}>
        Call API
      </button>
      <div>
        My data :<li>{myData === '' ? '' : myData[0].original_title}</li>
        <li>{myData === '' ? '' : myData[1].original_title}</li>
        <li>{myData === '' ? '' : myData[2].original_title}</li>
      </div>
      <Footer />
    </div>
  );
}

export default App;
