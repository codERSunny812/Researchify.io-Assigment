import express from 'express';
import { chatController } from '../controller/chat.controller.js';


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from chat route');
})



router.post('/message', chatController);







export default router;