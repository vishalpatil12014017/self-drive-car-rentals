
const express=require("express")
const router=express.Router();
const crudcontroller=require("./crud.controller")
const topic=require("../models/topic.model")

router.post("",crudcontroller.post(topic))
router.get("",crudcontroller.get(topic))
router.get("/:id",crudcontroller.getOne(topic))
router.patch("/:id",crudcontroller.updatedOne(topic))
router.delete("/:id",crudcontroller.deletOne(topic))
module.exports=router
