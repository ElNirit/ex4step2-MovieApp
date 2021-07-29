import { useEffect, useState } from "react";
import ActorModel from "../../model/ActorModel";
import Card from "../../components/Actor/Actor";
import Search from "../../components/Filter/Filter";
import Sort from "../../components/Sort/sort";
import "./Gallery.css";
import axios from "axios";

function Gallery() {
    const [actors, setActors] = useState([]);
    useEffect(() => {
        axios.get("actors.json").then((Response) =>{
            setActors(Response.data.map((plainActor) => new ActorModel(plainActor)));
        });
    }, []);
    const [searchInput, setSearchInput] = useState('');
    const [sortBy, setSortBy] = useState("firstName");
    function findActors(actor) {
      return (
        actor.firstName.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        actor.lastName.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
      );
    }
    const cards = actors
      .filter(findActors)
      .sort((actor1, actor2) => {
        return ActorModel.compare(sortBy, actor1, actor2);
      })
      .map((actor) => <Card key={actor.id} actor={actor}></Card>);
    return (
      <div className="container">
        <div className="sortSearch">
          <Search
            placeholder="Please enter an actor name to filter"
            onChange={(input) => setSearchInput(input)}
          ></Search>
          <Sort onChange={(sort) => setSortBy(sort)}></Sort>
        </div>
        <div className="gallery">{cards}</div>
      </div>
    );
  }
  
  export default Gallery;
     