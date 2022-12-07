import ProgressCircle from "./ProgressCircle";

function Card(props) {
  const { filmDetail } = props;
  return (
    <div className="w-full h-full">
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              style={{ width: 100, height: 100 }}
              src={filmDetail.imgTrailer}
              alt="error"
            />
            <h1 className="">Bright</h1>
            <h4 className="my-2">2017, David Ayer</h4>
            <span className="minutes font-bold bg-green-500">TOP 10</span>
          </div>
          <div className="movie_desc">
            <p className="text-red-600 font-bold text-xl">Đánh giá</p>
            <ProgressCircle evaluate={filmDetail.evaluate} />
          </div>
        </div>
        <div className="blur_back bright_back">
          <img
            className="h-full w-full"
            src={filmDetail.image || ""}
            alt="error"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
