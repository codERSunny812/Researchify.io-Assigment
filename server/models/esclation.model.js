import mongoose from "mongoose";


const esclationSchema = mongoose.Schema({
    firstText:{
        type:String
    },
    secondText:{
        type: String
    },
    imageUrl:{
        type:String
    },
    userName:{
        type: String
    }
})



const esclationModel = mongoose.model('esclationModel',esclationSchema)


export default esclationModel;