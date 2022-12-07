import { Skeleton } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

function VideoList(props) {
  const { listBanner } = useSelector((state) => state.filmReducer);
  const renderListBanner = () => {
    let jsx = [];
    if (listBanner.length === 0) {
      //listBanner.length === 0
      for (let i = 0; i < 3; i++)
        jsx.push(
          <div key={i} className="">
            <Skeleton.Button
              active
              style={{ width: "100%", height: "150px" }}
            />
          </div>
        );
      return jsx;
    }
    return listBanner.map((item, index) => {
      return (
        <div key={index} className="basis-1/3">
          <VideoItem idYoutube={item.idYoutube} />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-row md:flex-col pl-2 justify-between gap-2">
      {renderListBanner()}
    </div>
  );
}

export default VideoList;
