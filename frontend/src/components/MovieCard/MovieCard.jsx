import React, { useState } from 'react'
import styles from './MovieCard.module.css';
import { FaHeart, FaRegHeart, FaPlus, FaMinus, FaEye, FaCheck  } from 'react-icons/fa';


const MovieCard = ({ movie }) => {
const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
const [favorites, setfavorites] = useState(false);
const [myList, setMyList] = useState(false);

const addFavorites = () => {
    setfavorites(!favorites)
  };

const addToMyList = () => {
    setMyList(!myList)
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFlip}>
        {/* FRENTE */}
        <div className={styles.front}>
          <img src={imageUrl} alt={movie.title} className={styles.image} />
        </div>

        {/* DORSO */}
        <div className={styles.back}>
            <h3>{movie.title}</h3>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.icons}>
            <div>
               {favorites ? (
              <FaHeart onClick={addFavorites} />
            ) : (
              <FaRegHeart onClick={addFavorites} />
            )}
            </div>
            <div>
               {myList ? (
              <FaCheck onClick={addToMyList} />
            ) : (
              <FaPlus onClick={addToMyList} />
            )}
            </div>
          </div>
          <button className={styles.infoButton}>+ INFO</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard