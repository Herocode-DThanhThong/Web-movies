import { Skeleton } from "antd";
import EpisodeItem from "./EpisodeItem";

function EpisodeList(props) {
  const { filmDetail } = props;

  const renderListFilmDetail = () => {
    let jsx = [];
    if (filmDetail.episodes?.length === 0 || !filmDetail?.episodes) {
      // listPopularFilm.length === 0
      for (let i = 0; i < 8; i++)
        jsx.push(
          <div className="" key={i}>
            <Skeleton.Button
              active
              className="w-full rounded-md"
              style={{ width: "100%", height: "200px" }}
            />
          </div>
        );
      return jsx;
    }
    return filmDetail.episodes?.map((item, index) => {
      return (
        <EpisodeItem
          number={index}
          key={index}
          title={filmDetail.name}
          srcImg={item.image}
        />
      );
    });
  };
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {renderListFilmDetail()}
    </div>
  );
}

export default EpisodeList;
