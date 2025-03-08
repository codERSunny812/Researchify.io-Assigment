import esclationModel from "../models/esclation.model.js";
import groupModel from "../models/information.model.js";
import taskModel from "../models/Task.model.js";



export const addGroupInfo = async(req,res)=>{
const {imageUrl,text,number} = req.body;
try {
    //check the text in not present in the DB

    const check =await groupModel.findOne({text});

    if(check){
        return res.json({
            message:"this is already present in DB"
        })
    }


    const data = new groupModel({imageUrl,text,number});

    await data.save();

    return res.json({
        message:"data is successfully added"
    })
} catch (error) {
    return res.json({
        message:"error in adding data",
        error:error.message
    })
}
}



export const addTask = async(req,res)=>{
const {text}= req.body;
try {
    const checkData = await taskModel.findOne({text});
    if(checkData){
        return res.json({
            msg:"data is already present"
        })
    } 

    const data = new taskModel({text});

    await data.save();

    return res.json({
        msg:"data is successfully added!"
    })
} catch (error) {
    return res.json({
        message: "error in adding data",
        error: error.message
    })
}
}


export const addEscalation = async(req,res)=>{
    const { firstText, secondText, imageUrl, userName } = req.body;
    try {
        const checkData = await esclationModel.findOne({ userName });
        if (checkData) {
            return res.json({
                msg: "data is already present"
            })
        }

        const data = new esclationModel({ firstText, secondText, imageUrl, userName });

        await data.save();

        return res.json({
            msg: "data is successfully added!"
        })
    } catch (error) {
        return res.json({
            message: "error in adding data",
            error: error.message
        })
    }
}

export const getAllGroupInfo = async (req, res) => {
    try {
        const data = await groupModel.find();
        return res.json({
            success: true,
            message: "Fetched all group information successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching group information",
            error: error.message
        });
    }
};


export const getAllTasks = async (req, res) => {
    try {
        const data = await taskModel.find();
        return res.json({
            success: true,
            message: "Fetched all tasks successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching tasks",
            error: error.message
        });
    }
};


export const getAllEscalations = async (req, res) => {
    try {
        const data = await esclationModel.find();
        return res.json({
            success: true,
            message: "Fetched all escalations successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching escalations",
            error: error.message
        });
    }
};
