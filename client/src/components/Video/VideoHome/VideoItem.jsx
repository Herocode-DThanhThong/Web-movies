import React from "react";

function VideoItem(props) {
  const { idYoutube } = props;
  return (
    <div className="rounded-lg border-2 border-gray-800 h-[173px] w-full md:w-full">
      <iframe
        width="100%"
        height="100%"
        // controls={false}
        src={`https://www.youtube.com/embed/${idYoutube}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        frameBorder="2"
        // allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default VideoItem;
