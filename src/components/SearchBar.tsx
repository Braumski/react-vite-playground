import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="search-inputs">
        <input type="text" placeholder="Enter a pokemon name" />
        <div className="search-icon">
          <svg data-testid="SearchIcon"></svg>
        </div>
      </div>
      <div className="data-result"></div>
    </div>
  );
}
