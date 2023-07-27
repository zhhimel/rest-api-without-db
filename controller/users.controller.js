let users=require("../models/users.model");
const {v4: uuidv4}=require("uuid");
const getallusers=(req,res)=>{
    res.status(201).json({users});
};
const createUser = (req, res) => {
    const newUser = {
      id: uuidv4(),
      username: req.body.username,
      email: req.body.email,
    };
    users.push(newUser);
    res.status(201).json(users);
  };
const updateUser=(req,res)=>{
    const id=req.params.id;
    const {username,email}=req.body;
    users.filter((user)=>user.id===id).map((selectedUser)=>{
        selectedUser.username=username;
        selectedUser.email=email;
    })
    res.status(202).json(users);
}
const deleteUser=(req,res)=>{
    const id=req.params.id;
    
    users=users.filter((user)=>user.id!==id);
    res.status(202).json(users);
}
module.exports= {getallusers,createUser,updateUser,deleteUser};