import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokeList, setPokeList, searchTerm}) {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(()=>{
    fetch("http://localhost:3001/pokemon").then(resp=>resp.json()).then(arr=>{setPokeList(arr); setIsLoaded(true)})
  },[])

  const filteredList = pokeList.filter((pokemon)=>{
    if(pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return true;
    }
    return false;
  })

  if (!isLoaded){return <h2>loading</h2>}
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {filteredList.map((pokemon)=>{return <PokemonCard name = {pokemon.name} hp = {pokemon.hp} frontSprite={pokemon.sprites.front} backSprite={pokemon.sprites.back}></PokemonCard>})}
    </Card.Group>
  );
}

export default PokemonCollection;
