 const express = require("express");
 const router = express.Router()
 const Data = require("../../DB/Schema/Uschema.js")
 const bcrypt = require("bcryptjs")
 const jwt = require("jsonwebtoken")
 router.post("/Register",async(req,res)=>{
   console.log(req.body)
  try {
    let salt = 10
     var {name,password} = req.body 
     console.log(req.body.name)
     var check = await Data.findOne({name:req.body.name})
     console.log(check,"This is check")
     if(check){
   res.send({err:"user already exists.....!"})
     }
     else{
   password = await bcrypt.hash(password,salt)
   const save = await Data.insertMany([{name,password}])
    const id = await save[0]
    const sign = await jwt.sign({id:id},process.env.JWT_PASS,{
      expiresIn:process.env.JWT_EXPIRES
      })
      const filter = await{name:req.body.name}
      const update = await Data.findOneAndUpdate(filter,{token:sign})
      const user = await Data.findOne({name:req.body.name})
      //console.log(update)
      return res.json(user)
     }
   } catch (error) {
     console.log(error);
     res.json(error)
   }
})
 router.post("/login",async(req,res)=>{
  var {name,password} = req.body
  const find = await Data.findOne({name:req.body.name})
if(find){
    const compare = await bcrypt.compare(req.body.password,find.password)
    if(compare == true){
      res.json("Account exists...!")
    }
    else{
      res.json("password wrong...!")
    }
 } 
 else{
   res.json("Account not exists create account....!")
 }
 })
 
 module.exports = router
