import { useSearch } from '../contexts/searchContext';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


function Search() {
  const { query, setQuery } = useSearch();
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search?query=${query}`);
  };

  return (
    <div>
      {/* Use the styled Input component */}
      <Input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search movies or TV shows..."
      />
      {/* Use the styled Button component */}
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default Search;