import React, { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard.jsx";
import styles from './MovieList.module.css'
import MovieDetail from "../../pages/MovieDetail/MovieDetail.jsx";

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpenDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
     <div className={styles.listContainer}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onOpenDetail={handleOpenDetail}
        />
      ))}

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default MovieList;
