const mongoose=require('mongoose');

const connectiondb=mongoose.connect('mongodb+srv://{mongodbusername}:{mongopassword}@cluster0.pq65k.mongodb.net/blackcofferdb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection sucessfull")).catch((err)=>console.log(err));



module.exports=connectiondb;
