import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSearch } from '../utils/tmdb';
import Card from '../components/card';
import { CardsWrapper } from '../styles/sharedStyles';

function SearchResults() {
  const router = useRouter();

  // Log the search query from the URL
  console.log("Search Query:", router.query.query);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (router.query.query) {
      const fetchSearch = async () => {
        const data = await getSearch(router.query.query);
        console.log("API Response:", data);
        if (data && data.results) {
          setSearch(data.results);
        }
      };
  
      fetchSearch();
    }
  }, [router.query.query]);

  useEffect(() => {
    console.log("Search State:", search); // Log the search state whenever it changes
  }, [search]);

  return (
    <div>
      <h1>Search Results for: {router.query.query}</h1>
      <CardsWrapper>
        {search.map(item => (
          <Card 
            key={item.id} 
            id={item.id}
            title={item.title || item.name} 
            backdropPath={item.backdrop_path} 
            type={item.media_type}  // Assuming the API response has a 'media_type' field
          />
        ))}
      </CardsWrapper>
    </div>
  );
}

export default SearchResults;