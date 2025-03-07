import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './Db/Db.js';
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth",authRoutes);


app.get('/', (req, res) => {
    res.send('Hello World');
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});