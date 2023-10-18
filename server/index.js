const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { studentRouter } = require("./routes/studentRouter");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json())

app.get("/",async(req,res)=>{
    try {
        res.status(200).json({message:"server is runngng and the home route"})
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
})

app.use("/student",studentRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log("server is running");

    } catch (error) {
        console.log(error.message);

    }
})