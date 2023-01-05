import { useEffect } from "react";
import { useState } from "react";
import PostOne from "./PostOne";
import { instance, instanceTwo } from "../../App";

const Post = ({ data }) => {
  //   const [post, setPost] = useState([]);
  //   const getData = async () => {
  //     const res = await instanceTwo.get(``);
  //     setPost(res.data.posts);
  //     console.log(res);
  //   };
  // const [data, setData] = useState([]);
  // const getData = async () => {
  //   const res = await instance.get('posts');
  //   setData(res.data.data)
  // };

  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <div className="postContainer">
      {data &&
        data.map((data) => {
          return <PostOne key={Math.random() + data} data={data} />;
        })}
    </div>
  );
};
export default Post;
