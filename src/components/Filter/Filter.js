// import React { useState } from 'react';
import React from "react";
import "./Filter.css";

// TODO למפות לווליו כדי שאוכל לתת ערך התחלתי ואת הפלייסאורד  לקבל בתור פרופס
function Search({ placeholder, onChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;


// function Search({cards, setFilteredCards}) {
//   const [input, setInput] = useState('');

//   const filterActors = (input) => {
//       let cardsToFilter = cards.filter(actor => {
//           return actor.firstName.includes(input) || actor.lastName.includes(input)
//       });

//       if(cardsToFilter === 0){
//           return setFilteredCards([false]);
//       } else if(input === ''){
//             return setFilteredCards([]);
//       }  else {
//          return setFilteredCards(cardsToFilter);
//       }
//   }


//     return (
//         <div>
//             <input type="text" value={input} onChange={filterActors(e.target.value)}></input>
//             <button>search</button>
//         </div>
//     );
// }
// let cardsToShow;
// if(filteredCards.length > 0) return cardsToShow = filteredCards;
// if(filteredCards.length === 0) return cardsToShow = cards;
// if(filteredCards[0] === false) return cardsToShow = 'no results found';

// return(
//     <div>
//         <Search cards={cards} setFilteredCards={setFilteredCards} />
//         { cardsToShow.map(actor => (
//             <Card card={actor}/>
//         ))}
//     </div>
        
// )
// export default Search;
