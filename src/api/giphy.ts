import axios from 'axios';
import { GiphyApiResponse } from '../types/giphy';

// Axios instance for Giphy API
const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 5000, // timeout of 5 secs 
});

// Function to search GIFs
export const searchGifs = async (query: string): Promise<GiphyApiResponse> => {
  try {
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY; 

    if (!apiKey) {
      throw new Error('Giphy API Key is missing');
    }

    const response = await giphyApi.get('/search', {
      params: {
        api_key: apiKey,
        q: query,
        limit: 24, // Fetch 24 results
      },
    });

    return response.data as GiphyApiResponse;
    
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};