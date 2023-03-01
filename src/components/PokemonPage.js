import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeList, setPokeList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokeList={pokeList} setPokeList={setPokeList}/>
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection searchTerm={searchTerm} pokeList={pokeList} setPokeList={setPokeList}/>
    </Container>
  );
}

export default PokemonPage;
