const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// console.log("API KEY:", API_KEY

export const getPopularMovies = async () => {
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.status_message || 'Error al obtener películas');
    }
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Fallo en getPopularMovies:', error.message);
    throw error;
  }
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error('Error al buscar películas');
  const data = await res.json();
  return data.results;
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=es`);
    const data = await response.json();
    return data.cast.slice(0, 4); // devolvemos los primeros 5 actores
  } catch (error) {
    throw new Error("Error al obtener el elenco");
  }
};

export const getMovieTrailer = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=es-ES`);
    const data = await response.json();

    const trailer = data.results.find(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error('Error al obtener el tráiler:', error.message);
    return null;
  }
};

