import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_FILM_WATCHING } from "../../redux/reducers/types/watchingReducer";
import "./watchFilm.css";

function EpisodeItem(props) {
  const { number, idYoutube, firstIDYoutube } = props;
  const { numberEpisode } = useSelector((state) => state.watchingReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (firstIDYoutube) {
      dispatch({
        type: SET_FILM_WATCHING,
        idYoutube: firstIDYoutube,
        number: 1,
      });
    }
  }, [dispatch]);
  return number ? (
    <div
      style={
        numberEpisode === number ? { background: "#ff4d4f", color: "#fff" } : {}
      }
      className={`text-white seat hover:bg-gray-100 hover:text-orange-500 `}
      onClick={() => {
        dispatch({
          type: SET_FILM_WATCHING,
          idYoutube,
          number,
        });
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        {number}
      </p>
    </div>
  ) : (
    ""
  );
}

export default EpisodeItem;
