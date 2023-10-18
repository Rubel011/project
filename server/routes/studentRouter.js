const express=require("express");
const { listOfStudent, insertStudent, updateStudent } = require("../controllers/studentController");

const studentRouter=express.Router();

studentRouter.get("/",listOfStudent);


studentRouter.post("/",insertStudent);

studentRouter.put("/:id",updateStudent)


module.exports={studentRouter}