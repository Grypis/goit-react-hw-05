import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/films-api";
import Loader from "../../components/Loader/Loader";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const getMovieDetailsRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetailsRequest();
  }, [movieId]);

  return (
    <div>
      {movieDetails !== null && (
        <MovieInfo backLink={backLink} {...movieDetails} />
      )}

      {isLoading && <Loader />}
      {error && <h2>Something went wrong ...</h2>}
    </div>
  );
};

export default MovieDetailsPage;
