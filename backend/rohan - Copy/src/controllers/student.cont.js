const express=require("express")
const router=express.Router();
const crudcontroller=require("./crud.controller")
const students=require("../models/student.model")


router.get('/top',async (req, res)=>{
    const student=await students.find().sort({marks:-1}).limit(1) 
    return res.status(200).send({student})
    })

router.post("",crudcontroller.post(students))
router.get("",crudcontroller.get(students))
router.get("/:id",crudcontroller.getOne(students))
router.patch("/:id",crudcontroller.updatedOne(students))
router.delete("/:id",crudcontroller.deletOne(students))
module.exports=router
