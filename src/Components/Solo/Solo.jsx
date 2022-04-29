import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Solo.css";

const Solo = ({ name, year, rating, poster, id }) => {
  const { pathname } = useLocation();
  console.log(pathname, "THIS IS PARAMS");
  return (
    <div>
      <div className="card" style={{ marginTop: "30px" }}>
        <img src={poster} />
        <Link
          to={`/${id}`}
          state={{ name, year, rating, poster }}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            color="error"
            style={{ width: pathname === "/" ? "100%" : "75%" }}
          >
            Подробнее
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Solo;
