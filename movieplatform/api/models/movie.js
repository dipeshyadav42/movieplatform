const mongoose=require('mongoose')

const movieSchema=mongoose.Schema({
    img:String,
    name:String,
    desc:String,
    type:String,
    category:String

})


module.exports=mongoose.model('movie',movieSchema)