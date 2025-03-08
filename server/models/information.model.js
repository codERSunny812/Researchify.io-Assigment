import mongoose from "mongoose";


const groupSchema = mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }
})



const groupModel = mongoose.model('groupModel',groupSchema)


export default groupModel;