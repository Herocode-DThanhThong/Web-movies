import { StarOutlined } from "@ant-design/icons";
import { Skeleton } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "./ListFilm.css";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const contentStyle = {
  height: "280px",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  borderRadius: "8px",
};

function ListFilmHome(props) {
  const { slidePerview } = props;
  const { listPopularFilm } = useSelector((state) => state.filmReducer);
  const [indexImgTrailer, setIndexImgTrailer] = useState();
  const renderLstFilm = () => {
    let jsx = [];
    if (listPopularFilm.length === 0) {
      // listPopularFilm.length === 0
      for (let i = 0; i < 6; i++)
        jsx.push(
          <div className="" key={i}>
            <Skeleton.Button
              active
              className="w-full"
              style={{ width: "100%", height: "350px" }}
            />
          </div>
        );
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {jsx}
        </div>
      );
    }
    return (
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={slidePerview}
        navigation
        className="pt-6 px-6"
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {listPopularFilm?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="w-full px-1" style={{ height: "100%" }}>
                <div
                  onMouseEnter={() => {
                    setIndexImgTrailer(index);
                  }}
                  onMouseLeave={() => {
                    setIndexImgTrailer("");
                  }}
                  className="image-trailer"
                  style={{
                    ...contentStyle,
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  {indexImgTrailer === index ? (
                    <Link to={`/film/${item._id}`}>
                      <img
                        style={{
                          width: "100%",
                          height: "50%",
                          borderTopLeftRadius: "8px",
                          borderTopRightRadius: "8px",
                        }}
                        src={item.imgTrailer}
                        alt="error"
                      />
                      <div
                        style={{
                          background: "#1A1C22",
                          height: "50%",
                          borderBottomLeftRadius: "8px",
                          borderBottomRightRadius: "8px",
                        }}
                      >
                        <h3 className="text-white text-center">
                          {item.name.length > 25
                            ? item.name.slice(0, 25) + "..."
                            : item.name}
                        </h3>
                        <p className="text-yellow-500">
                          <strong className="mx-2 text-green-500 text-bold">
                            Đánh giá:
                          </strong>
                          {item.evaluate} ⭐
                        </p>
                        <div>
                          <p
                            className="m-2 text-white"
                            style={{ fontSize: "0.7rem" }}
                          >
                            {item.description.length > 100
                              ? item.description.slice(0, 100) + "..."
                              : item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <img
                        className="w-full rounded-lg h-full"
                        src={item.image}
                        alt="error"
                      />
                    </>
                  )}
                </div>
                <div className="my-2">
                  <h3 className="text-white">
                    {item.name.length > 25
                      ? item.name.slice(0, 25) + "..."
                      : item.name}
                  </h3>
                  <div className="flex items-center">
                    <StarOutlined className="text-yellow-500 text-xl mr-2" />
                    <p className="text-yellow-500">{item.evaluate}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };
  return (
    <div className="px-2">
      <h2 className="text-white text-2xl ml-2 font-bold my-2">
        Popular Movies
      </h2>
      {renderLstFilm()}
    </div>
  );
}

export default ListFilmHome;
