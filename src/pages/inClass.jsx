const { array } = require("prop-types");

function MainPage(){

    const actorsArr = [{
        firstName: "Brad",
        LastName: "Pitt"
    },
    {
        firstName: "Jennifer",
        lastName: "Aniston"
    }
]
    const [actors, setActors] = React.useState(actorsArr);




    return (
        <div>
            <Filter actorsArr={actorsArr} setActors={setActors}/>

            {actors.map(actor => {
                return <Actor data={actor}/>
            })}
            
        </div>
    )
}

function Actor({data}){


    return(
        <div>
            <img src={data.img}/>
            <h1>{data.firstName + data.lastName}</h1>
        </div>
    )
}

function Filter({actorsArr, setActors}){
    const newActors = []

    let debounce  = () =>{
        setTimeout(
            filterActors
            , 3000);

    } 

    clearTimeout(debounce);


    

    const filterActors = (str) =>{
        
        newActors = actors.filter(actor =>{
         actor.firstName.includes(str) ||
         actor.lastName.includes(str)
         ? actor : null; 
        });

        //חיפוש חדש או מאפס את החיפוש
        
        if(str === ""){
            return setActors(actorsArr);
        } else {
            return setActors(newActors);

        }

    }



    return(
        <input type="text" onChange={e =>filterActors(e.target.value) }/>

    )
}
