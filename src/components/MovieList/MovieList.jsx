import css from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <h3 className={css.title}>• {title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieList;
