import React, { FC } from 'react';
import { GiphyData } from '../../types/giphy';
import styles from './GifGrid.module.css';

interface GifGridProps {
  gifs: GiphyData[];
}

const GifGrid: FC<GifGridProps> = ({ gifs }) => {
  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(
      () => alert('GIF URL copied to clipboard!'),
      (err) => console.error('Failed to copy: ', err)
    );
  };

  return (
    <div className={styles.grid}>
      {gifs.map((gif) => (
        <div key={gif.id} className={styles.card}>
          <a href={gif.url} target="_blank" rel="noopener noreferrer">
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              loading="lazy"
              className={styles.image}
            />
          </a>
          <div className={styles.actions}>
            <button
              className={styles.button}
              onClick={() => handleCopyUrl(gif.url)}
            >
              Copy URL
            </button>
            <a
              href={gif.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View on Giphy
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
