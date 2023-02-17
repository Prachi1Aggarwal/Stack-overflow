import express from "express";
import { login, signup } from "../controllers/auth.js";

// to create new router object

const router = express.Router();

// POST request as your inputted data will be processed and assorted into a database

router.post('/signup',signup)
router.post('/login',login)

export default router