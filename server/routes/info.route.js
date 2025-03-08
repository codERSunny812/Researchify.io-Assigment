import express from 'express'
import { addEscalation, addGroupInfo, addTask, getAllEscalations, getAllGroupInfo, getAllTasks } from '../controller/info.controller.js';

const router = express.Router();


router.get('/',(req,res)=>{
    res.send("information route")
})


router.post('/group',addGroupInfo);
router.post('/task',addTask)
router.post('/esclation',addEscalation)
router.get('/getGroupData',getAllGroupInfo)
router.get('/getTaskData',getAllTasks)
router.get('/getEscalData',getAllEscalations)

export default router;




