const exprees=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("hello");
});
app.listen(7000,()=>{
  console.log("runing at the 7000");
});
