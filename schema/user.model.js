import { model, Schema } from "mongoose";
const userSchema =new Schema({
    fullName : {
        type: String,
        required:true

    },
    Age:{
        type: Number,
        required: true
    },
    Email:{
        type:String,
        required: true

    }

})

 export const user= model("detail",userSchema)
