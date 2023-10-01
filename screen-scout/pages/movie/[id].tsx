import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getMovieDetails } from '../../utils/tmdb'

const DetailsContainer = styled.div`
  background-color: #111;
  color: #fff;
  font-family: 'Arial', sans-serif;
`

const HeroSection = styled.div`
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
  background-image: ${props => `url(${props.imageurl})`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  border-radius: 20px;  // Rounded corners
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);  // Subtle shadow

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%);
    pointer-events: none;  // Ensure the overlay doesn't interfere with any interactions
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('path_to_pattern_image.png');  // A subtle pattern overlay
    opacity: 0.1;
    pointer-events: none;
  }
`

const HeroText = styled.h1`
  color: #fff;
  font-size: 3em;
  text-align: center;
  z-index: 2;  // Ensure the text is above the overlays
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  // Text shadow for better readability
  font-weight: bold;
  letter-spacing: 1.2px;
`

const MovieInfo = styled.div`
  padding: 20px;
`

const MovieTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`
const Rating = styled.div`
  display: flex;
  align-items: center;

  span {
    background-color: ${props => (props.value >= 7 ? '#4CAF50' : props.value >= 5 ? '#FFC107' : '#f44336')};
    padding: 5px 10px;
    border-radius: 20px;
    margin-left: 10px;
  }
`

const MovieDateRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`

const Synopsis = styled.p`
  font-size: 1.1em;
  opacity: 0.9;
`

const ProductionCompanies = styled.img`
  width: 50px;
  margin-right: 10px;
  padding: 5px;  // Padding around the logo
  background-color: #ffffff;
  border-radius: 8px;  // Rounded corners
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);  // Subtle shadow
  transition: transform 0.3s ease;  // Smooth transform transition

  &:hover {
    transform: scale(1.1);  // Slightly enlarge the logo on hover
  }
`;

function MovieDetail() {
  const router = useRouter()
  const { id } = router.query

  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [production, setProduction] = useState([])

  // Fetch movie details using the ID
  // Render the movie details
  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        const fetchedMovie = await getMovieDetails(id)
        setMovie(fetchedMovie)
        setProduction(fetchedMovie.production_companies || [])
        setLoading(false)
      };
  
      fetchMovieDetails()
    }
  }, [id])

  if (loading || !movie) {
    return <p>Loading...</p>
  }

  return (
    <DetailsContainer>
      <HeroSection imageurl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}> 
      </HeroSection>
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
          <MovieDateRating>
            <Rating value={movie.vote_average}>
              Rating: 
              <span>{movie.vote_average}/10</span>
            </Rating>
          </MovieDateRating>
        <Synopsis>{movie.overview}</Synopsis>
        <div>
                {production.map(productions => (
                  <ProductionCompanies 
                    key={productions.id} 
                    src={`https://image.tmdb.org/t/p/w92${productions.logo_path}`} 
                    alt={productions.name} 
                  />
              ))}
        </div>
        {/* Add more details like cast, director, runtime, etc. */}
      </MovieInfo>
    </DetailsContainer>
  )
}

export default MovieDetail