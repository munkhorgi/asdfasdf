import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersOfMore from "./UsersOfMore";
const ProfileMore = ({ data }) => {
  console.log(data);
  return (
    <div className="profile">
      <div className="myProfile">
        <div className="profileMain">
          <img src={data.image} alt="" className="myProfileImg" />
          <Link
            to="./"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "600",
            }}
          >
            {" "}
            <div className="myUserName">PROJECT</div>
          </Link>
        </div>
        <div className="Switch">Switch</div>
      </div>
      <div className="suggest">
        <div className="suggestText">Suggestions for you</div>
        {data &&
          data?.map((el) => {
            return (
              <Link
                key={Math.random() + el}
                to={`/${el._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <UsersOfMore user={el} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default ProfileMore;
