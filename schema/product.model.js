import { model, Schema } from "mongoose";

const productSchema= new Schema({

    Name:{
        type:String,
        required:true
    },
    
    Title:{
        type:String,
        
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    rating:{
        type:Number,
        required:true
    }



})
export const product= model("stock",productSchema)





