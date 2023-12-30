import { useEffect, useState, useRef } from "react";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function DataFetch() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchData = async () => {
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

  //   fetch(`https://pokeapi.co/api/v2/pokemon/${inputRef}/`)
  //     .then((response) => response.json())
  //     .then((json: Pokemon | Pokemon[]) => {
  //       const singlePokemon = Array.isArray(json) ? json[0] : json;
  //       setPokemon(singlePokemon);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setPokemon(null);
  //     });
  // };

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    fetchData();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon-search">Search:</label>
        <input
          type="search"
          id="pokemon-search"
          name="pokemon-search"
          placeholder="Enter a Pokemon name"
          ref={inputRef}
        />
        <button type="submit">Search</button>
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
