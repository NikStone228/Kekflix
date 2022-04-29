import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlayer } from "../../store/moviesSlice";
import Iframe from "react-iframe";

export const Player = () => {
  const dispatch = useDispatch();
  const { player } = useSelector((state) => state.movies);
  const { id } = useParams();
  console.log(player);

  useEffect(() => {
    dispatch(getPlayer(id));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Iframe
        url={player.iframeUrl ? player.iframeUrl : ""}
        width="100%"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
      />
    </div>
  );
};
