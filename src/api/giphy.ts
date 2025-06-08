/* eslint-disable camelcase */

 import api from './api';
 import { GiphyApiResponse } from '../types/giphy';

 export const searchGifs = async (query: string): Promise<GiphyApiResponse> => {
   try {
     const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

     if (!apiKey) {
       throw new Error('Giphy API Key is missing');
     }
     const response = await api.get<GiphyApiResponse>('/search', {
       params: {
         api_key: apiKey,
         q: query,
         limit: 24,
       },
     });

     return response.data;
   } catch (error) {
     console.error('Error fetching GIFs:', error);
     throw error;
   }
};