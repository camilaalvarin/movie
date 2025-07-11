import React from 'react'
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  // return (
  //   <div className={styles.cardContainer}>
  //     <div className={styles.cardDiv}>
  //       <div className={styles.titleDiv}>
  //         <h3>{movie.title}</h3>
  //       </div>
  //       <div className={styles.imgDiv}>
  //         <img src={imageUrl} alt={movie.title} className={styles.image} />
  //         <div className={styles.favoritesDiv}>
  //           <p>♥</p>
  //       </div>
  //       </div>
  //       <div className={styles.infoDiv}>
  //         <p>+ INFO</p>
  //       </div>
  //     </div>
  //   </div>
  // )


  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFlip}>
        {/* FRENTE */}
        <div className={styles.front}>
          <img src={imageUrl} alt={movie.title} className={styles.image} />
          {/* <div className={styles.titleOverlay}>
            <h3>{movie.title}</h3>
          </div>
          <div className={styles.favorites}>♥</div> */}
        </div>

        {/* DORSO */}
        <div className={styles.back}>
          <div className={styles.icons}>
            <p>♥</p>
            <p>♥</p>
            <p>♥</p>
          </div>
            <h3>{movie.title}</h3>
          <p className={styles.overview}>{movie.overview}</p>
          <button className={styles.infoButton}>+ INFO</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard