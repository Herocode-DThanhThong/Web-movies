import { PlayCircleFilled } from "@ant-design/icons";
import { Skeleton } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "280px",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  borderRadius: "8px",
};

function RecommendFilm(props) {
  const { recommendFilm } = useSelector((state) => state.filmReducer);
  const [showIconPlay, setShowIconPlay] = useState({
    show: false,
    index: 0,
  });

  const renderLstFilm = () => {
    let jsx = [];
    if (recommendFilm.length === 0) {
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {recommendFilm.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/film/${item._id}`}>
                <div className="p-2">
                  <div
                    onMouseEnter={() => {
                      setShowIconPlay({ show: true, index });
                    }}
                    onMouseLeave={() => {
                      setShowIconPlay({ show: false, index });
                    }}
                    className="hover:opacity-60 transition-all relative"
                    style={{
                      ...contentStyle,
                      backgroundImage: `url(${item.image})`,
                    }}
                  >
                    <img className="opacity-0" src={item.image} alt="error" />
                    {showIconPlay.show && showIconPlay.index === index ? (
                      <div
                        className="bg-sky-400 absolute p-4 rounded"
                        style={{ top: "40%", borderRadius: "50%", left: "35%" }}
                      >
                        <PlayCircleFilled
                          className="text-white"
                          style={{ fontSize: "1.8rem" }}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className="px-2">{renderLstFilm()}</div>;
}

export default RecommendFilm;
