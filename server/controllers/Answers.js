import mongoose from 'mongoose'
import Questions from '../models/Questions.js'

export const postAnswer= async (req,res) => {
    const { id: _id  } = req.params;
    const { noOfAnswers, answerBody, userAnswered } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question unavailable...")
    }
    updateNoOfQuestions(_id,noOfAnswers)
    try {
        //findByIdAndUpdate(parameter,{Query})
        //here our answer is in an array so we passed our anwer object in array[]
        //$addToSet is not going to replace the answer array but it will be appending a new value to the array
        const updatedQuestion = await Questions.findByIdAndUpdate( _id, { $addToSet: {'answer':[{answerBody, userAnswered,userId: req.userId}]}})
        res.status(200).json(updatedQuestion)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate( _id, { $set: {'noOfAnswers': noOfAnswers}})
    } catch (error) {
        console.log(error)
    }
}