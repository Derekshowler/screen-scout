import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMovieDetails } from '../../utils/tmdb';

const DetailsContainer = styled.div`
  background-color: #111;
  color: #fff;
  font-family: 'Arial', sans-serif;
`;

const BackdropImage = styled.div`
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  background-image: ${props => `url(${props.imageUrl})`};

  // Gradient overlay to ensure text readability
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%);
  }
`;

const MovieInfo = styled.div`
  padding: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const MovieDateRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Synopsis = styled.p`
  font-size: 1.1em;
  opacity: 0.9;
`;

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch movie details using the ID
  // Render the movie details
  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        const fetchedMovie = await getMovieDetails(id);
        setMovie(fetchedMovie);
        setLoading(false);
      };
  
      fetchMovieDetails();
    }
  }, [id]);

  if (loading || !movie) {
    return <p>Loading...</p>;
  }

  return (
    <DetailsContainer>
      <BackdropImage imageUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieDateRating>
          <span>{movie.release_date}</span>
          <span>Rating: {movie.vote_average}/10</span>
        </MovieDateRating>
        <Synopsis>{movie.overview}</Synopsis>
        {/* Add more details like cast, director, runtime, etc. */}
      </MovieInfo>
    </DetailsContainer>
  );
}

export default MovieDetail;