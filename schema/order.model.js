import { model, Schema } from "mongoose";
const orderSchema = new Schema({



   

    Name: {
        type: "String",
        required: true
    },

    totalPrice: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "pending"
    }

})
export const order=model("orderlist",orderSchema)



