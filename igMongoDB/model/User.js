import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username :{
        type:String,
        required:[true , "fuck you username write and database drop"],
        minlenght:[1 , " username is NaN "]
    }  , 
    posts : Number,
    followers : String ,Number ,
    following : Number,
    age : Number,
    image : String ,
})

const User = mongoose.model("User" , UserSchema)
export default User;