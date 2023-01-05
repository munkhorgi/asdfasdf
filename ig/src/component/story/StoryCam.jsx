import { useState, useEffect } from "react";
import Story from "./Story";
import { instance } from "../../App";
import "./AppPost.css";

const StoryContainer = ({ data }) => {
  return (
    <div className="storyBox">
      {data &&
        data.map((data) => {
          return <Story key={Math.random() + data} data={data} />;
        })}
    </div>
  );
};
export default StoryContainer;
