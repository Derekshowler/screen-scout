import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getMovies = async (query) => {

    try {
        const response = await axios.get(`${BASE_URL}search/multi`, {
        params: {
            api_key: API_KEY,
            query: query,
        },
        });
        
        return response.data;
    } catch (error) {
        console.error("Error fetching what you searched for:", error);
        return null;
    }
};

export const getTrendingMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      return null;
    }
  };
  
  export const getTrendingTVShows = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/trending/tv/day`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching trending TV shows:", error);
      return null;
    }
  };