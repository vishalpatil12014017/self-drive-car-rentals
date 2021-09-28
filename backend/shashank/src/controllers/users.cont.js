const express=require("express")
const router=express.Router();
const crudcontroller=require("./crud.controller")
const User=require("../models/users.model")

router.post("",crudcontroller.post(User))
router.get("",crudcontroller.get(User))
router.get("/:id",crudcontroller.getOne(User))
router.patch("/:id",crudcontroller.updatedOne(User))
router.delete("/:id",crudcontroller.deletOne(User))
module.exports=router
