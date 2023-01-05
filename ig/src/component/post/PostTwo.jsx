import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App";
const PostTwo = ({ data }) => {
  return (
    <div className="userDataContainer">
      {" "}
      <div className="userData">
        <img src={data.image} alt="" className="userDataBox" />
        <div className="names">
          <Link
            to={`${data.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{data.username}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostTwo;
