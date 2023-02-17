import express from "express";
import { postAnswer } from '../controllers/Answers.js'

const router = express.Router();
//patch is type of request that use to update the database
router.patch('/post/:id',postAnswer)

export default router
