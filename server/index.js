import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
//routes
import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js'

//call dotenv
dotenv.config();
//initialize this app
const app = express();
//call dotenv


//set up body parser
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

//must be above the routes
app.use(cors())

//use middleware for the prefix routes th post routes will be reached bu localhost:5000/posts/ ....
app.use('/posts', postRoutes)
app.use('/user', userRoutes)

//host data base thorugh the cloud 
const PORT = process.env.PORT || 3001;
mongoose.connect('mongodb+srv://memories:memories@cluster0.ruxvc.mongodb.net/?retryWrites=true&w=majority').then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))).catch((error) => console.log(error))

