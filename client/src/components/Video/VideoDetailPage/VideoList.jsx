import VideoItem from "./VideoItem";

function VideoList(props) {
  const { filmDetail } = props;
  const data = [...filmDetail?.episodes];
  console.log("data: ", data);
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {data?.length >= 9
        ? data?.splice(0, 9).map((item, index) => {
            return <VideoItem key={index} idYoutube={item.idYoutube} />;
          })
        : data?.map((item, index) => {
            return <VideoItem key={index} idYoutube={item.idYoutube} />;
          })}
    </div>
  );
}

export default VideoList;
