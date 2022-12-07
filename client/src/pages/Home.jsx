import { Skeleton } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndexAllFilm from "../components/AllFilm/IndexAllFilm";
import CarouselFilm from "../components/carousel/CarouselFilm";
import IndexListFilmNew from "../components/ListFilmNew/IndexListFilmNew";
import IndexListFilmPopular from "../components/ListFilmPopular/IndexListFilmPopular";
import VideoList from "../components/Video/VideoHome/VideoList";
import {
  GET_ALL_FILM_SAGA,
  GET_BANNER_SAGA,
  GET_LIST_NEW_FILM_SAGA,
  GET_LIST_POPULAR_FILM_SAGA,
} from "../redux/sagas/contants/manageFilmContants";
function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_BANNER_SAGA });
    dispatch({ type: GET_LIST_POPULAR_FILM_SAGA });
    dispatch({ type: GET_LIST_NEW_FILM_SAGA });
    dispatch({
      type: GET_ALL_FILM_SAGA,
    });
  }, [dispatch]);
  const { listBanner } = useSelector((state) => state.filmReducer);
  return (
    <div className="w-full" style={{ backgroundColor: "#101A24" }}>
      <div className="p-2">
        <div className="grid grid-cols-4">
          <div
            className="col-span-4 md:col-span-3"
            style={{ borderRadius: "8px" }}
          >
            {/* istBanner.length === 0 */}
            {listBanner.length === 0 ? (
              <Skeleton.Button
                active
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <CarouselFilm listBanner={listBanner} />
            )}
          </div>
          <div className="col-span-4 md:col-span-1">
            <VideoList />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <IndexListFilmPopular />
      </div>
      <div className="mt-2">
        <IndexListFilmNew />
      </div>
      <div className="mt-2">
        <IndexAllFilm />
      </div>
    </div>
  );
}

export default Home;
