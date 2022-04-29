import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchFilms } from "../../store/moviesSlice";
import Solo from "../Solo/Solo";
import "./Search.css";

export const Search = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { found } = useSelector((state) => state.movies);

  const onIpnutChange = (e) => {
    setName(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFilms(name));
    setName("");
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => onIpnutChange(e)}
          value={name}
          className="inputSearch"
          placeholder="SearchMovie"
        />
        <button
          type="submit"
          onClick={(e) => onFormSubmit(e)}
          className="searchButton"
        >
          Поиск
        </button>
      </form>
      <div className="foundContainer">
        {found.map((el) => (
          <Solo
            name={el.nameRu}
            poster={el.posterUrlPreview}
            id={el.filmId}
            key={el.filmId}
          />
        ))}
      </div>
    </div>
  );
};
