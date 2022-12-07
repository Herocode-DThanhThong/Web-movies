import { Link } from "react-router-dom";

function EpisodeItem(props) {
  const { number, title, srcImg } = props;
  return srcImg ? (
    <div
      style={{ borderRadius: "8px", cursor: "pointer" }}
      className="my-2 px-2 transition ease-in-out hover:scale-105 hover:opacity-75"
    >
      <Link to="detail">
        <img
          style={{
            borderRadius: "8px",
            height: "200px",
            width: "100%",
            objectFit: "cover",
          }}
          src={srcImg}
          alt="error"
        />
        <div className="space-y-2">
          <p className="my-2 font-semibold dark:text-violet-400">
            {title.length > 40 ? title.slice(0, 40) + "..." : title} - tập{" "}
            {number}
          </p>
        </div>
      </Link>
    </div>
  ) : (
    ""
  );
}

export default EpisodeItem;
