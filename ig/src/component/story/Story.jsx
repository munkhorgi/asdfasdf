import { Link } from "react-router-dom";
import "./AppPost.css";
function Story({ data }) {
  return (
    <Link
      to={`${data?._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="storyContainer">
        <img src={data?.image} alt="" className="storyImg" />
        <div style={{ textAlign: "center" }}>{data?.username}</div>
      </div>
    </Link>
  );
}

export default Story;
