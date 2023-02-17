import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
const app = express();

//express.json()=> allow response in json format(computer/web readable format)

app.use(express.json({limit: "30mb", extended: true}))

//express.urlencoded()=> allow response in array/string format.
// limit=> maximum size of the response
// extended=> allows to choose between parsing the URL encoded data with the queryString Library or the qs Library.

app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

// get function routes the HTTP GET request to specified path.
// app.get(path,callback)

app.get('/',(req,res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL= "mongodb+srv://admin:admin@stack-overflow-clone.c7hvkjk.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))