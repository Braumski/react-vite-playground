import { useState, useRef, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import SearchBar from "./SearchBar";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function DataFetchOld() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);
  const pokemonList = [];

  useEffect(() => {
    const fetchData = async () => {};
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1025`) // all 1025 pokemon for search results
      .then((response) => response.json())
      .then((data) => {
        const pokemonArray = data.results;
        pokemonArray.forEach((pokemon) => {
          pokemonList.push(pokemon.name);
        });
        console.log(pokemonList);
      })
      .catch((error) => {
        console.error("Something went wrong with retrieving the pokemon!");
        console.error(error);
      });
    setLoading(false);
  }, []);

  // Render loading state while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <SearchBar
          placeholder="Enter a pokemon name"
          pokemonList={pokemonList}
        />
      </>
    );
  }
}
