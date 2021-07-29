import React from 'react';
import ActorModel from '../../model/ActorModel';
import './Actor.css';

function Card({actor}){
    const actorModel= new ActorModel(
        actor.id,
        actor.firstName,
        actor.lastName,
        actor.birthday,
        actor.image,
        actor.imdbLinks
    );
    return (
        <div className="card">
            <img src={actor.image} />
            <a href={actor.imdbLinks} target="_blank" rel="noreferrer"></a>
            <p>First Name: {actor.firstName} </p> 
            <p>Last Name: {actor.lastName}</p> 
            <p>Age: {actorModel.calculateAge()}</p>
            <p>Birth Day: {actor.birthday}</p>
        </div>
    )
}

// class Card extends React.component{
//     constructor(props){
//         super();

//     }
  
//     render(){
//         <div>
//             <img src={props.cards.img}/>
//             <a href={props.cards.imbd}></a>
//             <h1>{props.cards.firstName + props.card.lastName}</h1> 
//             <h2>{props.cards.age}</h2>
//             <h3>{props.cards.birthday}</h3>
//             <p>{props.cards.birthday}</p>
//         </div>

//     }
    
// }

// //App

// const [filteredCards, setFilteredCards] = useState([]);

// const cards = [{
//     firstName: "Brad",
//     LastName: "Pitt",
//     img:"https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
//     birthDay: " December 18, 1963",
//     age:67,
//     imbd:"https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"
// },{
//     firstName: "Jeffrey Dean",
//     LastName: "Morgan",
//     img:"https://m.media-amazon.com/images/M/MV5BM2QwNjhkYzMtNjQ5Mi00OTk2LTg4N2ItZjUzYmU4MWViMDkxXkEyXkFqcGdeQXVyODY2NjYzNA@@._V1_UY317_CR3,0,214,317_AL_.jpg",
//     birthDay: " April 22, 1966",
//     age:67,
//     imbd:"https://www.imdb.com/name/nm0604742/?ref_=ttfc_fc_cl_t11"
// },{
//     firstName: "Ryan",
//     LastName: "Reynolds",
//     img:"https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
//     birthDay:  "October 23, 1976",
//     age:67,
//     imbd:"https://www.imdb.com/name/nm0005351/?ref_=nv_sr_srsg_3"
// },{
//     firstName: "Tom",
//     LastName: "Hiddleston",
//     img:"https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY317_CR9,0,214,317_AL_.jpg",
//     birthDay: " February 9, 1981",
//     age:67,
//     imbd:"https://www.imdb.com/name/nm1089991/"
// }
// ]
export default Card;
