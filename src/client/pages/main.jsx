import React from 'react';
import { FilmListContainer, SearchContainer, FilmSortContainer } from '../containers';

export const MainPage = (props) => {
//   {throw  new Error('I crashed!')}
    
  return (
    <React.Fragment>
        <div className="header">
            <div className="wrapper">
                <SearchContainer {...props} />
                <FilmSortContainer />
            </div>
        </div>
        <div className="main">
            <div className="wrapper">  
                <FilmListContainer />
            </div>
        </div>
    </React.Fragment>
  )
}





function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {
      yield i;
    }
  
}

let gen = generateSequence(2,5)

// for(let value of gen) {
//     console.log(value);
// }
console.log(...gen)


console.dir( Object.prototype.toString.call(gen).slice(8,-1) ) 

console.dir(fetch)

