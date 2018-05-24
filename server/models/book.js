const mongoose = require ("mongoose")
const Schema = mongoose.Schema

var timestamps=require ("mongoose-timestamp")

const bookSchema = new Schema({
    userId:{type:Schema.Types.ObjectId, ref:'User'},
    title:String,
    author:String,
    publisher:String,
    pic_url:String
})

bookSchema.plugin(timestamps)
mongoose.model('book',bookSchema)

const Book = mongoose.model('book',bookSchema)

module.exports=Book