import css from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit }) => {
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Search movies"
        className={css.input}
      />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
