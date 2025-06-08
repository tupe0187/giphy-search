import React, { FC, useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <label htmlFor="search" className={styles.label}>
        Search GIFs:
      </label>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for GIFs..."
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
