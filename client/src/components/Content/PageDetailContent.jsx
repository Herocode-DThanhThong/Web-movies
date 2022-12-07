import { NavLink } from "react-router-dom";

function PageDetailContent(props) {
  const { filmDetail } = props;
  return (
    <div className="px-4 pt-2">
      <h1 className="text-white font-bold text-3xl">{filmDetail?.name}</h1>
      <p className="text-white my-2">
        {" "}
        <span className="text-green-500">⭐ 9.5 </span> | C13 | 2021 | 24 tập
      </p>
      <p className="text-white my-2">
        <strong className="text-gray-300 text-xl mr-2">Khu vực:</strong>
        Trung Quốc đại lục Lồng tiếng
      </p>
      <p className="text-white my-2">
        {" "}
        <strong className="text-gray-300 text-xl ">Đạo diễn：</strong>
        Trung Quốc{" "}
      </p>
      <p className="text-white my-2">
        <strong className="text-gray-300 text-xl mr-2">
          {" "}
          Diễn viên chính:
        </strong>
        herocode, herocode
      </p>
      <p className="text-white my-2 leading-8">
        <strong className="text-gray-300 text-xl mr-2 "> Miêu tả:</strong>
        {filmDetail.description}
      </p>
      <div className="flex justify-center flex-wrap items-center my-2">
        <NavLink to="detail" className="hover:text-red-500">
          <button
            style={{ width: "150px", height: "45px" }}
            className="flex mr-2 my-2 items-center gap-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch
          </button>
        </NavLink>
        <button
          style={{ width: "150px", height: "45px" }}
          className="flex items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
          </svg>
          <span>Save</span>
        </button>
        <button
          style={{ width: "150px", height: "45px" }}
          className="flex ml-2 items-center gap-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-blue-500 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default PageDetailContent;
