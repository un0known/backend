import dotenv from "dotenv"


import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()











/*
(this is our first apporce for  connecting port or mongodb with server)

import express from "express"
const app = express()

// iffi concept (using iffi)
( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`your server is running on port: 
                ${process.env.PORT}`);
            
        })
    } catch (error){
        console.log("ERROR", error)
        throw err   
    }
})()

 */