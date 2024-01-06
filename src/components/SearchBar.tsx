export default function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder="Enter a pokemon name" />
        <div className="search-icon"></div>
      </div>
      <div className="data-result"></div>
    </div>
  );
}
