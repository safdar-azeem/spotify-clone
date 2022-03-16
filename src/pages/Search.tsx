import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchResults from "../components/search/SearchResults";
import { MusicData } from "../db/data";
import { Item } from "../types";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Item[]>(MusicData);

  const handleSearch = () => {
    const results = MusicData.filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-5">Search Page</h1>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
      <div className="mt-7">
        <SearchResults searchResults={searchResults} />
      </div>
    </div>
  );
}

export default Search;
