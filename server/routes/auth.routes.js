import express from "express";
import { registerUser, loginUser } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);

export default router;
