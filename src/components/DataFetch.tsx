import { useState, useRef, useContext } from "react";
import { ThemeContext } from "../App";

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
  const [inputValue, setInputValue] = useState();
  const { theme } = useContext(ThemeContext);
  const pokemonList = [];

  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`) // all pokemon for search results
    .then((response) => response.json())
    .then((data) => {
      const pokemonArray = data.results;
      pokemonArray.forEach((pokemon, id) => {
        const name = pokemon.name;
        const pokemonObject = { id, name };
        pokemonList.push(pokemonObject);
      });
      console.log(pokemonList); // this list is for the autocomplete search bar
      //  expect an array of objects with 2 properties, id and pokemon
      //  [ {id: 0, name: 'bulbasaur'}, {id: 1, name: 'ivysaur'}, {id: 2, name: 'venusaur'} ...]

      // Might have to get rid of this since the last library didnt work.
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

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetchPokemonData();
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form className="pkmn-search" onSubmit={handleSubmit}>
        <label htmlFor="pokemon-search">Search:</label>
        <input
          type="search"
          id={theme}
          name="pokemon-search"
          placeholder="Enter a Pokemon name"
          ref={inputRef}
          onChange={handleInputChange}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>

      {/* Gonna Use a different search box, whether its a library or I make it myself */}

      {pokemon ? (
        <>
          <h1>Data returned</h1>
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      ) : (
        <h1>Data Pending...</h1>
      )}
    </>
  );
}
