import React, { useState, useEffect } from 'react';
import './Questionnaire.css';

function Questionnaire({
  allQuestionsAnswered,
  selectedTags,
  setSelectedTags,
}) {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const [showQuestions, setShowQuestions] = useState(false);
  const openWindows = () => {
    setShowQuestions(!showQuestions);
  };

  useEffect(() => {
    if (
      selectedOption1 !== '' &&
      selectedOption2 !== '' &&
      selectedOption3 !== '' &&
      selectedOption4 !== ''
    ) {
      const tags = [
        selectedOption1 === 'oui' ? 28 : 16,
        selectedOption2 === 'oui' ? 12 : 18,
        selectedOption3 === 'oui' ? 878 : 10749,
        selectedOption4 === 'oui' ? 53 : 35,
      ];
      const filteredTags = tags.filter(
        (questionTag) => !selectedTags.includes(questionTag)
      );

      // Faire une requête à l'API ici avec les tags sélectionnés
      setSelectedTags([...selectedTags, filteredTags]);
      console.log('Requête API avec les tags :', filteredTags);
    }
  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);

  return (
    <div className='Main-conteneur-questions'>
      <div className='bouton-Questions'>
        <button onClick={openWindows}>Questions</button>
      </div>
      <div
        className='conteneur-questions'
        style={{ display: showQuestions ? 'block' : 'none' }}
      >
        <h3>Action ou Animation ?</h3>
        <div>
          <button onClick={() => setSelectedOption1('oui')}>Action</button>
          <button onClick={() => setSelectedOption1('non')}>Animation</button>
        </div>
        {selectedOption1 === 'oui' || selectedOption1 === 'non' ? (
          <div>
            <h3>Aventure ou Drame ?</h3>
            <div>
              <button onClick={() => setSelectedOption2('oui')}>
                Aventure
              </button>
              <button onClick={() => setSelectedOption2('non')}>Drame</button>
            </div>
          </div>
        ) : null}
        {selectedOption2 === 'oui' || selectedOption2 === 'non' ? (
          <div>
            <h3>SF ou Romance ?</h3>
            <div>
              <button onClick={() => setSelectedOption3('oui')}>SF</button>
              <button onClick={() => setSelectedOption3('non')}>Romance</button>
            </div>
          </div>
        ) : null}
        {selectedOption3 === 'oui' || selectedOption3 === 'non' ? (
          <div>
            <h3>Thriller ou Comédie ?</h3>
            <div>
              <button onClick={() => setSelectedOption4('oui')}>
                Thriller
              </button>
              <button onClick={() => setSelectedOption4('non')}>Comédie</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Questionnaire;

// import React, { useState, useEffect } from 'react';
// import './Question.css';

// function Questionnaire() {
//   const [selectedOption1, setSelectedOption1] = useState('');
//   const [selectedOption2, setSelectedOption2] = useState('');
//   const [selectedOption3, setSelectedOption3] = useState('');
//   const [selectedOption4, setSelectedOption4] = useState('');

//   const [showQuestions, setShowQuestions] = useState(false);
//   const openWindows = () => {
//     setShowQuestions(!showQuestions);
//   };

//   useEffect(() => {
//     if (
//       selectedOption1 !== '' &&
//       selectedOption2 !== '' &&
//       selectedOption3 !== '' &&
//       selectedOption4 !== ''
//     ) {
//       const tags = [
//         selectedOption1 === 'oui' ? 'action' : 'comedy',
//         selectedOption2 === 'oui' ? 'adventure' : 'drama',
//         selectedOption3 === 'oui' ? 'sci-fi' : 'romance',
//         selectedOption4 === 'oui' ? 'thriller' : 'animation',
//       ];

//       // Faire une requête à l'API ici avec les tags sélectionnés
//       console.log('Requête API avec les tags :', tags);
//     }
//   }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);

//   return (
//     <div className='Main-conteneur-questions'>
//       <div className='bouton-Questions'>
//         <button onClick={openWindows}>Questions</button>
//       </div>
//       <div
//         className='conteneur-questions'
//         style={{ display: showQuestions ? 'block' : 'none' }}
//       >
//         <h3>Du fight ou du lol ?</h3>
//         <div>
//           <button onClick={() => setSelectedOption1('oui')}>Fight</button>
//           <button onClick={() => setSelectedOption1('non')}>Lol</button>
//         </div>
//         {selectedOption1 === 'oui' || selectedOption1 === 'non' ? (
//           <div>
//             <h3>Exotique ou nostalgique?</h3>
//             <div>
//               <button onClick={() => setSelectedOption2('oui')}>
//                 Exotique
//               </button>
//               <button onClick={() => setSelectedOption2('non')}>
//                 Nostalgique
//               </button>
//             </div>
//           </div>
//         ) : null}
//         {selectedOption2 === 'oui' || selectedOption2 === 'non' ? (
//           <div>
//             <h3>Plutot Star Trek ou Titanic ?</h3>
//             <div>
//               <button onClick={() => setSelectedOption3('oui')}>
//                 Star Trek
//               </button>
//               <button onClick={() => setSelectedOption3('non')}>Titanic</button>
//             </div>
//           </div>
//         ) : null}
//         {selectedOption3 === 'oui' || selectedOption3 === 'non' ? (
//           <div>
//             <h3>Plutot réaliste ou enfantin ?</h3>
//             <div>
//               <button onClick={() => setSelectedOption4('oui')}>
//                 réaliste
//               </button>
//               <button onClick={() => setSelectedOption4('non')}>
//                 enfantin
//               </button>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </div>
//   );
// }

// export default Questionnaire;