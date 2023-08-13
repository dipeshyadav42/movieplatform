const Movie=require('../models/movie')
const Message=require('../helpers/messages')
const category = require('../models/category')

exports.add=(req,res)=>{
    const imgname=req.file.filename
    const{name,desc,type,cat}=req.body
    try{
    const record=new Movie({name:name,desc:desc,type:type,img:imgname,category:cat})
    record.save()
    res.json({
        status:Message.status.status201,
        apiData:record,
        message:"Successfully Added"
    })
    }catch(error){
        res.json({
            status:Message.status.status400,
            message:error.message
        })
    }
}


exports.allmovie=async(req,res)=>{
    try{
    const record=await Movie.find()
    res.json({
        status:Message.status.status200,
        apiData:record
    })
    }catch(error){
        res.json({
            status:Message.status.status500,
            message:error.message
        })

    }
}

exports.moviedelete=async(req,res)=>{
    const id=req.params.id
    try{
    await Movie.findByIdAndDelete(id)
    res.json({
        status:200,
        message:'Successfully Deleted'
    })
    }catch(error){
        res.json({
            status:500,
            message:error.message
        })
    }
}

exports.usermovie=async(req,res)=>{
    try{
    const record=await Movie.find()
    // console.log(record)
    res.json({
        status:Message.status.status200,
        apiData:record
    })
    }catch(error){
        res.json({
            status:Message.status.status500,
            message:error.message
        })
    }
}

// exports.catsearch=async(req,res)=>{
//     // console.log(req.body)
//     const {cat}=req.body
//     try{
//       const record= await Movie.find({category:cat})
//      console.log(record)
//      res.json({
//         status:200,
//         apidata:record
//      })
//     }catch(error){
//            res.json({
//             status:400,
//             message:error.message
//            })
//     }
// }












