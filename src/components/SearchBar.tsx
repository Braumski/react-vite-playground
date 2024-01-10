import { FaSearch } from "react-icons/fa";

export default function SearchBar({ pokemonList }) {
  console.log(pokemonList);
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder="Enter a pokemon name" />
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>
      <div className="data-result">
        {pokemonList.map((name, key) => {
          return <a>{name}</a>;
        })}
      </div>
    </div>
  );
}
