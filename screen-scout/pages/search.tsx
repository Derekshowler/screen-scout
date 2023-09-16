import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getMovies } from '../utils/tmdb';
import Card from '../components/card';
import { CardsWrapper } from '../styles/sharedStyles';

function SearchResults() {
  const router = useRouter();

  // Log the search query from the URL
  console.log("Search Query:", router.query.query);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (router.query.query) {
      const fetchMovies = async () => {
        const data = await getMovies(router.query.query);
        console.log("API Response:", data);
        if (data && data.results) {
          setMovies(data.results);
        }
      };
  
      fetchMovies();
    }
  }, [router.query.query]);

  useEffect(() => {
    console.log("Movies State:", movies); // Log the movies state whenever it changes
  }, [movies]);

  return (
    <div>
      <h1>Search Results for: {router.query.query}</h1>
      <CardsWrapper>
          {movies.map(item => (
            <Card key={item.id} title={item.title || item.name} backdropPath={item.backdrop_path} />
          ))}
      </CardsWrapper>
    </div>
  );
}

export default SearchResults;