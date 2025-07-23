// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { searchMovies, getPopularMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
// import SearchBar from '../../components/SearchBar/SearchBar';
import Navbar from '../../components/Navbar/Navbar';
import styles from './home.module.css'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // buena práctica
  const [error, setError] = useState(null); // para manejar errores

  const handleSearch = async (query) => {
    setLoading(true);
    try {
      const data = query
        ? await searchMovies(query)
        : await getPopularMovies(); // 👈 si está vacío, traemos populares
      setMovies(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // if (loading) return <p>Cargando...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.home}>
      <Navbar onSearch={handleSearch} />
      {/* <SearchBar onSearch={handleSearch} /> */}
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;