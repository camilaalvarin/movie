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
