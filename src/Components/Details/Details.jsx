import { useParams, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import "./Details.css";
import { useEffect } from "react";
import { getReviews } from "../../store/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Player } from "../Player/Player";

export const Details = ({ name, rating, poster }) => {
  const { id } = useParams();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getReviews(id));
  }, []);

  return (
    <div>
      <div className="container">
        <img src={state.poster} />
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{ color: "white" }}
        >
          {state.name} ({state.year})
        </Typography>
        <Rating
          name="read-only"
          value={Math.round(Number(state.rating) / 2)}
          readOnly
        />
        <Player />
        <div className="reviews">
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            style={{ color: "white" }}
          >
            Отзывы
          </Typography>
          {reviews.map((el) => (
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "10px" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary "
                  gutterBottom
                >
                  <b>{el.reviewAutor}</b>
                  <br />
                  <b>{el.reviewTitle}</b>
                </Typography>
                <Typography variant="body2">{el.reviewDescription}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
