import { StarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function Content(props) {
  const { title, description } = props;
  const { numberEpisode } = useSelector((state) => state.watchingReducer);
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold title-font text-white">
        {title} - Tập {numberEpisode}
      </h1>
      <div className="my-2">
        <span className="text-white p-1 bg-orange-500 rounded ">
          Chỉ có trên MOVIES
        </span>
        <span className="text-white mx-3">|</span>
        <span className="text-white">C13</span>
        <span className="text-white mx-3">|</span>
        <span className="text-white">2022</span>
        <span className="text-white mx-3">|</span>
        <span className="text-white">24 tập</span>
      </div>
      <div className="flex my-2 items-center">
        <p className="mt-2 text-xl text-white font-bold">9.5</p>
        <p className="font-bold mx-1 text-xl text-green-400">
          <StarOutlined />
        </p>
        <p className="font-bold mx-1 text-xl text-green-400">
          <StarOutlined />
        </p>
        <p className="font-bold mx-1 text-xl text-green-400">
          <StarOutlined />
        </p>
        <p className="font-bold mx-1 text-xl text-green-400">
          <StarOutlined />
        </p>
        <p className="font-bold mx-1 text-xl text-green-400">
          <StarOutlined />
        </p>
        <p className="font-bold mx-1 text-xl text-white">|</p>
        <p className="mx-1 mt-1 text-gray-300">28.8k người đã thích</p>
      </div>
      <div className="mt-2 my-2">
        <p className="text-white">
          <strong className="text-gray-300 mr-2">Thể loại:</strong>
          Lãng mạng
        </p>
        <p className="text-white leading-10 my-2">
          <strong className="text-gray-300 mr-2 ">Mô tả:</strong>
          {description}.
        </p>
      </div>
    </div>
  );
}

export default Content;
