import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../assests/css/card.scss";
import Card from "../components/Card/Card";
import PageDetailContent from "../components/Content/PageDetailContent";
import TabFilm from "../components/Tab/TabFilm";
import { GET_DETAIL_FILM_SAGA } from "../redux/sagas/contants/manageFilmContants";
import _ from "lodash";
import { Skeleton } from "antd";
function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { filmDetail } = useSelector((state) => state.filmReducer);
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_FILM_SAGA,
      id,
    });
  }, [dispatch, id]);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111319",
      }}
    >
      <div className="flex flex-wrap py-2 px-2 items-center  lg:justify-between glassmorphism">
        <div className="basis-full lg:basis-1/2">
          {!_.isEmpty(filmDetail) ? (
            <PageDetailContent filmDetail={filmDetail} />
          ) : (
            <Skeleton.Button
              active
              className="w-full rounded-md"
              style={{ width: "100%", height: "350px" }}
            />
          )}
        </div>
        <div className="basis-full lg:basis-1/2">
          {!_.isEmpty(filmDetail) ? (
            <Card filmDetail={filmDetail} />
          ) : (
            <Skeleton.Button
              active
              className="w-full pl-4 rounded-md"
              style={{ width: "100%", height: "350px" }}
            />
          )}
        </div>
      </div>
      <div className="p-5">
        <TabFilm filmDetail={filmDetail} />
      </div>
    </div>
  );
}

export default Detail;
