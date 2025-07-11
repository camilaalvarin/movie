import React from 'react'
import MovieCard from "../MovieCard/MovieCard.jsx";
import styles from './MovieList.module.css'

const MovieList = ({ movies }) => {
  return (
    <div className={styles.listContainer}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
