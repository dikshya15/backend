import { model, Schema } from "mongoose";
const brandSchema =new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    logo: {
        type: String
    }

})
export const brand =model("brandlist",brandSchema)





