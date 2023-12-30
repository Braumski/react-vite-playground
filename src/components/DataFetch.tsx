import { useEffect, useState, useRef } from "react";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function DataFetch() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const inputRef = useRef();

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputRef}/`)
      .then((response) => response.json())
      .then((json: Pokemon | Pokemon[]) => {
        const singlePokemon = Array.isArray(json) ? json[0] : json;
        setPokemon(singlePokemon);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setPokemon(null);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <input
        type="text"
        name="pokemon-search"
        placeholder="Enter a Pokemon name"
        ref={inputRef}
        onChange={handleChange}
      ></input>

      <form>
        <label htmlFor="searchInput">Search:</label>
        <input type="search" id="searchInput" name="search" />
        <input type="submit" value="Search" />
      </form>

      {pokemon ? (
        <>
          <h1>Data returned</h1>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </>
      ) : (
        <h1>Data Pending...</h1>
      )}
    </>
  );
}
