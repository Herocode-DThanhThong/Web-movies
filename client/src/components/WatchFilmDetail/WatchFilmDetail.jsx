import { Button, Skeleton } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GET_DETAIL_FILM_SAGA,
  GET_RECOMMEND_FILM_SAGA,
} from "../../redux/sagas/contants/manageFilmContants";
import Comment from "../Comment/Comment";
import Content from "./Content";
import EpisodeItem from "./EpisodeItem";
import RecommendFilm from "./RecommendFilm";
import Video from "./Video";
import "./watchFilm.css";
import _ from "lodash";
function WatchFilmDetail(props) {
  const dispatch = useDispatch();

  const { episodeFilmDetail, recommendFilm } = useSelector(
    (state) => state.filmReducer
  );
  const { id } = useParams();
  const { filmDetail } = useSelector((state) => state.filmReducer);
  useEffect(() => {
    dispatch({
      type: GET_DETAIL_FILM_SAGA,
      id,
    });
  }, [dispatch, id]);
  useEffect(() => {
    dispatch({
      type: GET_RECOMMEND_FILM_SAGA,
    });
  }, [dispatch]);

  let firstIDYoutube = "";
  if (episodeFilmDetail[1]) {
    firstIDYoutube = episodeFilmDetail[1].idYoutube;
  }

  return (
    <div className="movieContainer mt-5">
      <div className="containerFilm">
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          <div className="col-span-2 h-[460px] lg:h-[100%]">
            <Video />
          </div>
          {!_.isEmpty(filmDetail) ? (
            <div className="p-4 col-span-2 lg:col-span-1">
              <div>
                <h1 className="mb-2 text-xl text-center font-semibold text-white text-struncate">
                  {filmDetail?.name}
                </h1>
                <div className="flex justify-center">
                  <Button
                    type="primary"
                    className="flex justify-center justify-items-center"
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/icon-playing.gif"
                      alt="error"
                    />
                    <p className="text-gray-300 text-base ml-2 text-center capitalize">
                      Chọn tập
                    </p>
                  </Button>
                  <Button
                    type="primary"
                    className="flex ml-2 justify-center justify-items-center"
                  >
                    <p style={{}} className="text-gray-300 text-center ">
                      Nội Dung Đặc Sắc
                    </p>
                  </Button>
                </div>
              </div>
              <div
                className="p-2 my-3 rounded "
                style={{
                  background: "#F5CC9C",
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Kích hoạt VIP chỉ 633đ/ngày{" "}
              </div>
              <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6">
                {episodeFilmDetail?.map((item, index) => {
                  return (
                    <EpisodeItem
                      key={index}
                      number={item.number}
                      idYoutube={item.idYoutube}
                      firstIDYoutube={firstIDYoutube}
                    />
                  );
                })}
              </div>
              <div className="screen" />
            </div>
          ) : (
            <Skeleton.Button
              active
              className="w-full rounded-md mt-2 col-span-2 lg:col-span-1"
              style={{ width: "100%", height: "350px" }}
            />
          )}
        </div>
        {!_.isEmpty(filmDetail) ? (
          <div>
            <Content
              title={filmDetail.name}
              description={filmDetail.description}
            />
            <div
              className="p-2 my-3 rounded"
              style={{
                background: "#F5CC9C",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Đón xem nhiều phim hay sắp ra mắt tại MOVIES
            </div>
          </div>
        ) : (
          <Skeleton.Button
            active
            className="w-full rounded-md my-2"
            style={{ width: "100%", height: "250px" }}
          />
        )}

        <div className="p-2 border-t-2 border-gray-400">
          <h1 className="my-2 text-2xl text-white font-bold">
            Đề xuất cho bạn
          </h1>
          <RecommendFilm recommendFilm={recommendFilm} />
        </div>
        <div className="p-2 border-t-2 border-gray-400">
          <h1 className="my-2 text-2xl text-white font-bold">Bình luận</h1>
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default WatchFilmDetail;
