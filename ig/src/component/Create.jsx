import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {

    const params = useParams();
    const id = params._id
    const [ username , setUsername] = useState()
    const[ image , setImage] = useState()
    const [ likes , setLikes] = useState()
    const [text , setText] = useState();
    const [mes ,setMes] = useState()
    const instance = axios.create({
        baseURL: "http://localhost:2470/",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      
    const postDesc = async () => {
      try {
        const res = await instance.post("/posts" , {
          username : username,
          image: image,
          text : text,
          like : likes ,
         
      })
      setMes()
      } catch (error) {

       toast.error(error.response.data.data);
  
      }
    } 
    useEffect(() => {
      postDesc()
    },[])

return (
      <div style={{display:"flex" , flexDirection:"column" , alignItems:"center" , background:"#fafafa"}}>
        <input style={{width:300 , height : 30}}
        class="form-control"
        placeholder="Username"
       onChange={(e) => setUsername(e.target.value)}
       />

       <input style={{width:300 , height : 30 , marginTop:10}}
       class="form-control"
       placeholder="Image"
       onChange={(e) => setImage(e.target.value)}
       />

       <input style={{width:300 , height : 30 , marginTop:10}}
       class="form-control"
       placeholder="Likes"
       type="number"
       onChange={(e) => setLikes(e.target.value)}
       />

         <input style={{width:300 , height : 30 , marginTop:10}}
         class="form-control"
         placeholder="Text"
       onChange={(e) => setText(e.target.value)}
       />
        <button 
        style={{marginTop:10}}
         type="button" class="btn btn-dark" 
       onClick={postDesc}
       >Post</button>
       <ToastContainer />
       {mes}
    </div>
)
}
export default Create