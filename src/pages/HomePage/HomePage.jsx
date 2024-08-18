import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../api/films-api";
import Loader from "../../components/Loader/Loader";
const HomePage = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchTrendingMovies();
        setTrendingFilms(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      {trendingFilms.length > 0 && <MovieList movies={trendingFilms} />}
      {isLoading && <Loader />}
      {error && <h2>Something went wrong ...</h2>}
    </div>
  );
};

export default HomePage;
