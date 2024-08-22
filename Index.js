const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT;
app.get("/",(req,res)=>{
  res.send("Server connected")
})
app.listen(PORT,()=>{
  console.log(`Your server is running on ${PORT}`);
})