const express=require('express')
const router=express.Router();
const {Transform}=require("stream")
const Data=require('../model/Schema')




router.get("/data", async (req, res) => {

    
   
    res.setHeader('Access-Control-Allow-Origin','*')
  const transformData=new Transform({objectMode:true})
  transformData.isWritten=false;
  transformData._transform=function(chunk,encoding,callback)
  {
   if(!this.isWritten)
   {
      this.isWritten=true;
      callback(null,'['+JSON.stringify(chunk));
   }
   else
   {
      callback(null,','+JSON.stringify(chunk));
   }
  
  }
  transformData._flush=function(callback)
  {
        callback(null,']')
  }
  const articles = await Data.find().cursor().pipe(transformData);

 articles.pipe(res);
 
//   console.log(articles);


});



module.exports=router;