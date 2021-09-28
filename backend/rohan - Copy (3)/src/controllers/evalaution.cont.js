
const express=require("express")
const router=express.Router();
const crudcontroller=require("./crud.controller")
const evol=require("../models/evalaution.model")
const Student=require("../models/student.model")

router.get('/:id/students',async (req, res)=>{
const students=await Student.find({evaluation:req.params.id}).lean().exec()
return res.status(200).send({students})
})

router.post("",crudcontroller.post(evol))
router.get("",crudcontroller.get(evol))
router.get("/:id",crudcontroller.getOne(evol))
router.patch("/:id",crudcontroller.updatedOne(evol))
router.delete("/:id",crudcontroller.deletOne(evol))
module.exports=router
