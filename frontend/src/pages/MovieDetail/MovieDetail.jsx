import React, { useState, useEffect  } from 'react'
import styles from './MovieDetail.module.css';
import { FaStar, FaHeart, FaRegHeart, FaPlus, FaMinus, FaEye, FaCheck  } from 'react-icons/fa';
import { getMovieCredits, getMovieTrailer  } from '../../api/api';

const MovieDetail = ({ movie, onClose }) => {
  const [favorites, setfavorites] = useState(false);
  const [myList, setMyList] = useState(false);
  const [cast, setCast] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);

  if (!movie) return null;

   useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(movie.id);
        setCast(data);

        const trailer = await getMovieTrailer(movie.id);
        setTrailerUrl(trailer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCredits();
  }, [movie.id]);

  useEffect(() => {
  document.body.style.overflow = 'hidden';
  return () => {
    document.body.style.overflow = 'auto';
  };
}, []);

    const backdropUrl = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;

    // style={{ backgroundImage: `url(${backdropUrl})` }}

    const addFavorites = () => {
      setfavorites(!favorites)
    };

    const addToMyList = () => {
        setMyList(!myList)
      };

  return (
    <div className={styles.modalOverlay} onClick={onClose} style={{ backgroundImage: `url(${backdropUrl})` }}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} >
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.infoContainer}>
          <div className={styles.imgDiv}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.release_date}</p>
          </div>
          
          <div className={styles.infoDiv}>
            <div className={styles.headerContainer}>
              <div className={styles.headerDiv}>
                <h2>{movie.title}</h2> 
                <span>|</span>
                <FaStar />
                <p>{movie.vote_average}</p>
              </div>
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
            </div>
            <p>{movie.overview}</p>
            <h4>Reparto:</h4>
            <div className={styles.actorsDiv}>
              {cast.map(actor => (
                <div className={styles.actors}>
                  <p key={actor.id}>{actor.character}</p>
                  <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} key={actor.id} alt="" />
                  <p key={actor.id}>{actor.name}</p>
              </div>
                ))
                }
          </div>

          {trailerUrl && (
          <div className={styles.trailerContainer}>
            <iframe
              width="100%"
              height="315"
              src={trailerUrl.replace('watch?v=', 'embed/')}
              title="Tráiler de la película"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;