import { Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./watchFilm.css";
function Video(props) {
  const { idFilmPlaying } = useSelector((state) => state.watchingReducer);

  return (
    <div className="h-full">
      {idFilmPlaying ? (
        <iframe
          style={{ width: "100%", height: "100%" }}
          src={`https://www.youtube.com/embed/${idFilmPlaying}`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <Skeleton.Button
          active
          className="w-full rounded-md"
          style={{ width: "100%", height: "470px" }}
        />
      )}
    </div>
  );
}

export default Video;
