const express = require("express");
const app = express();
const path = require("path");

const port=8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view engine", "ejs")
app.set("views",path.join(__dirname,"/views"));
app.listen(port , ()=>{
  console.log(`listening on ${port}`);
});

app.get("/",(req,res)=>{
  // res.send("this is root path");
  res.render("home.ejs");
});
// app.get("/",(req,res)=>{
//   let diceVal=Math.floor(Math.random()*6)+1;
//   res.render("diceroll.ejs",{diceVal});
// });

app.get("/ig/:username",(req,res)=>{
  // let followers = ['adam','john','rim'];
  let {username}=req.params;
  const instaData = require("./data.json")
  const data = instaData[username];
  if(data){
    res.render("ig.ejs",{data});
  }else{
    res.render("error.ejs");
  }
});


