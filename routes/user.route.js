const express=require("express");
const users=require("../models/users.model");
const { getallusers, createUser, updateUser, deleteUser } = require("../controller/users.controller");
const router=express.Router();
router.get("/",getallusers);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
module.exports =router;