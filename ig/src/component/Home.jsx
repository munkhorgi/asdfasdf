import ProfileMore from "./profile/ProfileMore";
import StoryContainer from "./story/StoryCam";
import Post from "./post/Post";
import { instance } from "../App";
import { useEffect, useState } from "react";
const Home = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const getData = async () => {
    const response = await instance.get("/users");
    setUserData(response.data.data);
    const res = await instance.get("/posts");
    setPostData(res.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="newsfeed">
        <div className="storyAbout">
          <StoryContainer data={userData} />
        </div>
        <div className="posts">
          <Post data={postData} />
        </div>
      </div>
      <div className="profiled">
        <ProfileMore data={userData} />
      </div>
    </div>
  );
};
export default Home;
