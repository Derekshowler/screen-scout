import React, { useEffect, useState } from 'react';
import { getTrendingMovies, getTrendingTVShows } from '../utils/tmdb';
import Card from '../components/card';
import styled from 'styled-components';
import Search from '../components/search';
import { CardsWrapper } from '../styles/sharedStyles';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
`;


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      const moviesData = await getTrendingMovies();
      const tvShowsData = await getTrendingTVShows();

      if (moviesData && moviesData.results) {
        setMovies(moviesData.results);
      }

      if (tvShowsData && tvShowsData.results) {
        setTVShows(tvShowsData.results);
      }
    };

    fetchTrendingData();
  }, []);


  return (
    <Container>
      <header>
        <h1>Screen Scouter</h1>
      </header>

      <main>
        <SearchBar>
            <Search />
        </SearchBar>

        {/* <section className="now-playing">
          <h2>Now Playing:</h2>
          <CardsWrapper>
            {movies.map(movie => (
              <Card 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                backdropPath={movie.backdrop_path} 
                type={movie.media_type}
                />
            ))}
          </CardsWrapper>
        </section> */}

        <section className="recommended-movies">
          <h2>Trending Movies This Week:</h2>
          <CardsWrapper>
            {movies.map(movie => (
              <Card 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                backdropPath={movie.backdrop_path} 
                type={movie.media_type}
                />
            ))}
          </CardsWrapper>
        </section>

        <section className="top-tv-shows">
          <h2>Trending Shows This Week:</h2>
          <CardsWrapper>
            {tvShows.map(show => (
              <Card 
                key={show.id} 
                id={show.id}
                title={show.name} 
                backdropPath={show.backdrop_path}
                type={show.media_type} 
              />
            ))}
          </CardsWrapper>
        </section>
      </main>

      <footer>
        <p>© 2023 Screen Scouter</p>
      </footer>
    </Container>
  );
}