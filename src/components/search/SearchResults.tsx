import { Item } from "../../types";
import Card from "../common/Card";

interface SearchResultsProps {
  searchResults: Item[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ searchResults }) => (
  <div>
    {searchResults.length === 0 ? (
      <p>No results found.</p>
    ) : (
      <ul className="grid grid-cols-5 gap-6 ">
        {searchResults.map((song) => (
          <li key={song.id} className="hover:scale-105 transition-all">
            <Card
              linkUrl={`/${song.type}/${song.id}`}
              imgUrl={song.img}
              title={song.title}
            />
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SearchResults;
