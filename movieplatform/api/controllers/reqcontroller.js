const Reg=require('../models/reg')
const bcrypt=require('bcrypt')
const helpers=require('../helpers/messages')


exports.registration=async(req,res)=>{
    const {username,password}=req.body
    const convertedpassword=await bcrypt.hash(password,10)
    //console.log(convertedpassword)
    const usercheck=await Reg.findOne({username:username})
    try{
     if(usercheck===null){
    const record=new Reg({username:username,password:convertedpassword})
    record.save()
    //console.log(record)
    res.json({
        message:helpers.messages.creation,
        apiData:record,
        status:helpers.status.status201
    })
     }else{
        res.json({
            message:"Username already taken",
            status:helpers.status.status400
        })
     }
}catch(error){
        res.json({
            status:helpers.messages.message400,
            message:error.message
        })
    }
}


exports.logincheck=async(req,res)=>{
    const {username,password}=req.body
    try{
    const record=await Reg.findOne({username:username})
    //console.log(record)
    if(record!==null){
        const passwordcompare=await bcrypt.compare(password ,record.password)
        //console.log(passwordcompare)
        if(passwordcompare){
            res.json({
                status:helpers.status.status200,
                apiData:record
            })
        }else{
            res.json({
                status:helpers.status.status400,
                message:'Wrong Credentials'
            })
        }
        }else{
            res.json({
                status:helpers.status.status400,
                message:'Wrong Credentials'
            })
    }
}catch(error){
    res.json({
       status:helpers.status.status400,
       message:error.message
    })
}
}