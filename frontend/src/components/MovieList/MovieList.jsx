import React, { useState } from 'react'
import MovieCard from "../MovieCard/MovieCard.jsx";
import styles from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpenDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
     <div>
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
