import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import GifGrid from './components/GifGrid/GifGrid';
import Loader from './components/Loader/Loader';
import { searchGifs } from './api/giphy';
import { GiphyData } from './types/giphy';

const App: React.FC = () => {
  const [gifs, setGifs] = useState<GiphyData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchGifs(query);
      setGifs(data.data); // `data.data` is array of GiphyData
    } catch (err) {
      setError('Failed to fetch GIFs. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Giphy Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && <GifGrid gifs={gifs} />}
    </div>
  );
};

export default App;
