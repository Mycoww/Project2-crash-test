// import './Tag.css';
// import PropTypes from 'prop-types';

// function TagSection({ selectedTags, setSelectedTags }) {
//   const handleTagSelection = (tag) => {
//     if (!selectedTags.includes(tag)) {
//       setSelectedTags([...selectedTags, tag]);
//     } else {
//       setSelectedTags(selectedTags.filter((x) => x !== tag));
//     }
//   };

//   return (
//     <div className='question-container-tag-div'>
//       <div className='tag-container-div'>
//         <p>Quels sont vos tags préférés ?</p>
//         <div>
//           <input
//             type='checkbox'
//             id='tag1'
//             onChange={() => handleTagSelection(28)}
//           />
//           <label htmlFor='tag1'>Action</label>
//         </div>
//         <div>
//           <input
//             type='checkbox'
//             id='tag2'
//             onChange={() => handleTagSelection(12)}
//           />
//           <label htmlFor='tag2'>Aventure</label>
//         </div>
//         <div>
//           <input
//             type='checkbox'
//             id='tag3'
//             onChange={() => handleTagSelection(27)}
//           />
//           <label htmlFor='tag3'>Horreur</label>
//         </div>
//         <div>
//           <input
//             type='checkbox'
//             id='tag4'
//             onChange={() => handleTagSelection(14)}
//           />
//           <label htmlFor='tag4'>Fantasy</label>
//         </div>
//       </div>
//     </div>
//   );
// }
// TagSection.propTypes = {
//   selectedTags: PropTypes.arrayOf(PropTypes.number).isRequired,
//   setSelectedTags: PropTypes.func.isRequired,
// };
// export default TagSection;

import './Tag.css';
import PropTypes from 'prop-types';

function TagSelection({ selectedTags, setSelectedTags }) {
  const handleTagSelection = (tag) => {
    console.log(tag);
    console.log(selectedTags);
    console.log(selectedTags.includes(tag));
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((x) => x !== tag));
    }
  };

  return (
    <div className='question-container-tag-div'>
      <div className='tag-container-div'>
        <p>Quels sont vos tags préférés ?</p>
        <div>
          <input
            type='checkbox'
            id='tag1'
            onChange={() => handleTagSelection(10751)}
          />
          <label htmlFor='tag1'>Famille</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag2'
            onChange={() => handleTagSelection(37)}
          />
          <label htmlFor='tag2'>Western</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag3'
            onChange={() => handleTagSelection(27)}
          />
          <label htmlFor='tag3'>Horreur</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='tag4'
            onChange={() => handleTagSelection(14)}
          />
          <label htmlFor='tag4'>Fantasy</label>
        </div>
      </div>
    </div>
  );
}

export default TagSelection;
