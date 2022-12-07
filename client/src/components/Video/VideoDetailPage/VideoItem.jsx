import { Skeleton } from "antd";
import { useState } from "react";
import { useEffect } from "react";

function VideoItem(props) {
  const { idYoutube } = props;
  const [loadingVideo, setLoadingVideo] = useState(true);

  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLoadingVideo(false);
    }, 1000);
    return () => {
      clearTimeout(idTimeOut);
    };
  }, []);
  return idYoutube ? (
    <div style={{ borderRadius: "8px" }} className="my-2 relative">
      {loadingVideo && (
        <Skeleton.Button
          active
          className="w-full rounded-md"
          style={{ width: "100%", height: "200px" }}
        />
      )}
      <iframe
        className={`${
          loadingVideo ? "opacity-0 absolute" : "opacity-1 relative"
        } `}
        width="100%"
        height={200}
        src={`https://www.youtube.com/embed/${idYoutube}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      />
    </div>
  ) : (
    ""
  );
}

export default VideoItem;
