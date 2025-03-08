import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})



const taskModel = mongoose.model('taskModel',taskSchema)


export default taskModel;