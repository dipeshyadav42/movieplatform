const mongoose=require('mongoose')

const catSchema=mongoose.Schema({
    category:String
})

module.exports=mongoose.model('category',catSchema)