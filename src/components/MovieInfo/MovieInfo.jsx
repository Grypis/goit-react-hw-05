import { Link, NavLink, Outlet } from "react-router-dom";
import css from "./MovieInfo.module.css";
const MovieInfo = ({
  backLink,
  backdrop_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div>
      <Link className={css.backLink} to={backLink.current}>
        🔙
      </Link>
      <div>
        {backdrop_path && <img src={baseUrl + backdrop_path} alt={title} />}
        {/* <img src={baseUrl + backdrop_path} alt={title} /> */}
        <h2>{title}</h2>
        <p>User score : {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className={css.linkWrap}>
        <NavLink to="cast" className={css.infoLink}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.infoLink}>
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieInfo;
