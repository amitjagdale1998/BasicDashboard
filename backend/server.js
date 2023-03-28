
const express=require('express');
const cors=require('cors');
const MongoClient=require('mongodb').MongoClient
const router=express.Router();
const mongoose=require('mongoose')
const {Transform}=require("stream")
const querystring=require('querystring')
const Data=require('./model/Schema')
// const {company}=req;
// const queryObject={};
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.port || 5000;
mongoose.connect('mongodb+srv://amitjagdale:Satara123@cluster0.pq65k.mongodb.net/blackcofferdb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection sucessfull")).catch((err)=>console.log(err));
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
app.get("/data", async (req, res) => {

    
   
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
    








    app.get("/api/data/perticular")
app.get('/',(req,res)=>
{
    res.status(200).json({msg:" get request is called"})
    
})

app.listen(PORT,()=>
{
    console.log(`example app listing on port ${PORT}`);
})


