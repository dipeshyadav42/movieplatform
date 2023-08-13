const Cat=require('../models/category')
const Message=require('../helpers/messages')

exports.catadd=(req,res)=>{
    console.log(req.body)
    const {cat}=req.body
    try{
    const record=new Cat({category:cat})
    record.save()
    res.json({
        status:Message.status.status201,
        apiData:record,
        message:"Successfully Category Added"
    })
    }catch(error){
        res.json({
            status:Message.status.status400,
            message:error.message
        })
    }
    
}



exports.categoryrecord=async(req,res)=>{
    try{
     const record=await Cat.find()
    // console.log(record)
     res.json({
         status:200,
         apidata:record
     })
    // console.log(record)
    }catch(error){
          res.json({
             status:400,
             message:error.message
          })
    }
 }

 
 