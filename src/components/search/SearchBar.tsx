import Button from "../common/Button";
import Input from "../common/Input";

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => (
  <div className="flex items-center mb-4 gap-3 w-full max-w-[400px]">
    <Input
      value={value}
      onChange={onChange}
      placeholder="Search for a song title"
    />
    <Button onClick={onSearch}>Search</Button>
  </div>
);

export default SearchBar;
