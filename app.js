const exprees=require('express');
const app=express();
app.get('/',(res,req)=>{
  res.get("hello");
});
app.listen(7000,()=>{
  console.log("runing at the 7000");
});
