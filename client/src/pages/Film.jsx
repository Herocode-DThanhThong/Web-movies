import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import WatchFilmDetail from "../components/WatchFilmDetail/WatchFilmDetail";
import { GET_EPISODE_FILM_DETAIL_SAGA } from "../redux/sagas/contants/manageFilmContants";

function Film(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_EPISODE_FILM_DETAIL_SAGA,
      id,
    });
  }, [dispatch, id]);
  return (
    <div
      className=""
      style={{ backgroundColor: "#101A24", minHeight: "100vh" }}
    >
      <WatchFilmDetail />
    </div>
  );
}

export default Film;
