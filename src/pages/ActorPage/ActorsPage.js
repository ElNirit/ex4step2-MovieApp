import React from "react";
import Gallery from "../../components/Gallery/Gallery";

function ActorsPage(props) {
  return (
    <div>
      <Gallery></Gallery>
    </div>
  );
}

export default ActorsPage;



// const { array } = require("prop-types");

// function MainPage(){

//     const actors = [{
//         firstName: "Brad",
//         LastName: "Pitt",
//         img:"https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
//         birthDay: 18/12/1963,
//         age:67,
//         imbd:"https://www.imdb.com/name/nm0000093/?ref_=nv_sr_srsg_0"
//     },{
//         firstName: "Jeffrey Dean",
//         LastName: "Morgan",
//         img:"https://m.media-amazon.com/images/M/MV5BM2QwNjhkYzMtNjQ5Mi00OTk2LTg4N2ItZjUzYmU4MWViMDkxXkEyXkFqcGdeQXVyODY2NjYzNA@@._V1_UY317_CR3,0,214,317_AL_.jpg",
//         birthDay: 22/04/1966,
//         age:67,
//         imbd:"https://www.imdb.com/name/nm0604742/?ref_=ttfc_fc_cl_t11"
//     },{
//         firstName: "Ryan",
//         LastName: "Reynolds",
//         img:"https://m.media-amazon.com/images/M/MV5BOTI3ODk1MTMyNV5BMl5BanBnXkFtZTcwNDEyNTE2Mg@@._V1_UY317_CR6,0,214,317_AL_.jpg",
//         birthDay: 23/10/1976,
//         age:67,
//         imbd:"https://www.imdb.com/name/nm0005351/?ref_=nv_sr_srsg_3"
//     },{
//         firstName: "Tom",
//         LastName: "Hiddleston",
//         img:"https://m.media-amazon.com/images/M/MV5BNWYwODAyZjAtOTQ1My00MDY2LTg0NDQtZGFiMDRiYzY4ZmM2XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UY317_CR9,0,214,317_AL_.jpg",
//         birthDay: 09/02/1981,
//         age:67,
//         imbd:"https://www.imdb.com/name/nm1089991/"
//     }
    
// ]

// const [actors, setActors] = React.useState(actorsArr);

//     return (
//         <div>
//             <Filter/>

//             {array.map(actor => {
//                 return <Actor data={actor}/>
//             })}
            
//         </div>
//     )
// }
// function Filter({actorsArr, setActors}){
//     const newActors = []

//     let debounce  = () =>{
//         setTimeout(
//             filterActors
//             , 3000);

//     } 

//     clearTimeout(debounce);


    

//     const filterActors = (str) =>{
        
//         newActors = actors.filter(actor =>{
//          actor.firstName.includes(str) ||
//          actor.lastName.includes(str)
//          ? actor : null; 
//         });

//         //חיפוש חדש או מאפס את החיפוש
        
//         if(str === ""){
//             return setActors(actorsArr);
//         } else {
//             return setActors(newActors);

//         }

//     }



//     return(
//         <input type="text" onChange={e =>filterActors(e.target.value) }/>

//     )
// }
