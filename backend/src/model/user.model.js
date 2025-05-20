import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
    mobilenumber:{
        type:String,
        required:true,
        minLength:10,
        maxLength:10
        },
    password:{
        type:String,
        required:true,
        minLength:8
    }
    });
    const User=mongoose.model('User',UserSchema);
    export default User;