const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js')
const connectDB = require('./db/connection');
const notFound = require('./middleware/not_found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/hello',(req,res)=>{
    res.send("task manager app")
})

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000;

const startServer = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("server is listening"))
    }
    catch(error){
        console.log(error)
    }
}
startServer()