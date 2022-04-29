import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getPremiers } from "../../store/moviesSlice";
import Premiers from "../Premiers/Premiers";
import Trends from "../Trends/Trends";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { trending, premiers, isLoading } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  useEffect(() => {
    dispatch(getPremiers());
  }, []);
  return (
    <div>
      <div onClick={() => navigate("/search")}>
        <img
          src="./img/search.png"
          style={{
            filter: "opacity(0.5) drop-shadow(0 0 0 red)",
            position: "absolute",
            right: "50px",
            top: "20px",
            width: "80px",
            height: "80px",
          }}
        />
      </div>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        style={{ color: "white" }}
      >
        В тренде
      </Typography>
      <Trends trends={trending} />
      <Premiers premiers={premiers} />
    </div>
  );
};
