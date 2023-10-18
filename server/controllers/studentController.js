const { Student } = require("../models/studentModel")



module.exports.listOfStudent = async (req, res) => {
    try {
        const user = await Student.find();
        res.status(200).json({ user })

    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}


module.exports.insertStudent = async (req, res) => {
    try {
        const { name, className, marks } = req.body
        // const {class}=res.body

        const student = await Student.findOne({ name });
        if (student) return res.status(401).json({ message: "student is present allready" });

        const newStudent = new Student({ name, class: className, marks });
        await newStudent.save();
        res.status(200).json({ message: "student insert successfully" })



    } catch (error) {
        res.status(500).json({ error: error.message })

    }
}


module.exports.updateStudent = async (req, res) => {
    const id = req.params.id
    try {

        const data=await Student.findOneAndUpdate({_id:id},req.body)

        res.status(200).json({data})


    } catch (error) {

        res.status(500).json({error:error.message})

    }
}


