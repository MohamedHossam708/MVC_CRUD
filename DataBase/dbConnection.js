import mongoose from "mongoose"



export function mongoConection(){
    mongoose.connect('mongodb://127.0.0.1:27017/MVC_Project')
    .then(()=>{console.log("Mongo is running too ..")})
    .catch((err)=>{console.log("DataBase error", err)})
    }