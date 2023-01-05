import { useState } from "react";
import { instance } from "../../App";
import { useEffect } from "react";
import UserProfile from "./UserProfile";
import { useParams } from "react-router-dom";
const ProRouter = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const getData = async (id) => {
    const response = await instance.get(`/users/${id}`);
    setData(response.data.data);
  };

  useEffect(() => {
    getData(id);
    console.log(data);
  }, []);

  return <div className="prorouter">{data && <UserProfile data={data} />}</div>;
};
export default ProRouter;
