const mongoose=require('mongoose');
let dataSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    end_year:String ,
            intensity:Number,
            sector: String,
            topic: String,
            insight: String,
            region:String,
            start_year:String,
            impact: String,
            added: String,
            published: Date,
            country:String,
            relevance: Number,
            pestle: String,
            source:String,
            title: String,
            likelihood:Number
})
module.exports=mongoose.model('blackcofferdb',dataSchema);
