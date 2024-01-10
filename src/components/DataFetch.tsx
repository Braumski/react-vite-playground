import { useState, useRef, useContext } from "react";
import { ThemeContext } from "../App";
import SearchBar from "./SearchBar";
//Library

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Fuse from "fuse.js";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function DataFetch() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pokemonList = [];

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`) // all 1025 pokemon for search results
    .then((response) => response.json())
    .then((data) => {
      const pokemonArray = data.results;
      pokemonArray.forEach((pokemon) => {
        pokemonList.push(pokemon.name);
      });
      console.log(pokemonList); // this list is for the autocomplete search bar
      //  expect an array of objects with 2 properties, id and pokemon
      //  [ {id: 0, name: 'bulbasaur'}, {id: 1, name: 'ivysaur'}, {id: 2, name: 'venusaur'} ...]
    })
    .catch((error) => {
      console.error("Something went wrong with retrieving the pokemon!");
      console.error(error);
    });

  const fetchPokemonData = async () => {
    try {
      const inputValue = inputRef.current?.value?.toLowerCase();
      if (!inputValue) {
        console.error("Please enter a Pokemon name");
        setPokemon(null);
        return;
      }
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}/`
      );
      const json = await response.json();

      setPokemon(json);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPokemon(null);
    }
  };

  return (
    <>
      <SearchBar pokemonList={pokemonList} />
    </>
  );
}
