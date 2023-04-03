
const express=require('express');
const cors=require('cors');
const MongoClient=require('mongodb').MongoClient
const router=express.Router();
const mongoose=require('mongoose')
const querystring=require('querystring')

// const {company}=req;
// const queryObject={};
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.port || 5000;
require('./db/db')
app.use(require('./router/routerData'));

//   Data.find({},function(err,data)
//   {
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log(data);
//     }
//   })
    








    app.get("/api/data/perticular")
app.get('/',(req,res)=>
{
    res.status(200).json({msg:" get request is called"})
    
})

app.listen(PORT,()=>
{
    console.log(`example app listing on port ${PORT}`);
})


