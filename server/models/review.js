const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reviewSchema = new Schema({

    userId : {type:Schema.Types.ObjectId, ref:'User'} ,
    review:String,
})

const Review = mongoose.model("review",reviewSchema)

module.exports=Review