import React, { useState } from 'react';
import Questionnaire from '../question/Question';
import TagSection from '../tag/Tag';

function Home() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [questionsId, setQuestionsId] = useState('');

  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className='homePage'>
      <Questionnaire
        selectedOption1={selectedOption1}
        setSelectedOption1={setSelectedOption1}
        selectedOption2={selectedOption2}
        setSelectedOption2={setSelectedOption2}
        selectedOption3={selectedOption3}
        setSelectedOption3={setSelectedOption3}
        selectedOption4={selectedOption4}
        setSelectedOption4={setSelectedOption4}
        questionsId={questionsId}
        setQuestionsId={setQuestionsId}
      />
      <TagSection tag={selectedTags} setTag={setSelectedTags} />
    </div>
  );
}

export default Home;
