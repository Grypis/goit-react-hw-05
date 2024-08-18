// import css from "./MovieReviews.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../api/films-api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const movieReviewsRes = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const reviews = await fetchMovieReview(movieId);
        setMovieReviews(reviews);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieReviewsRes();
  }, [movieId]);

  if (movieReviews.length === 0) {
    return <p>There are no reviews yet</p>;
  } else {
    return (
      <>
        {isLoading && <Loader />}
        <ul>
          {movieReviews.map(({ content, author, id }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
        {error && <h2>Something went wrong ...</h2>}
      </>
    );
  }
};

export default MovieReviews;
