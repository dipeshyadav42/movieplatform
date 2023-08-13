const router=require('express').Router()
const Regc=require('../controllers/reqcontroller')
const moviec=require('../controllers/moviecontroller')
const catc=require('../controllers/catcontroller')
const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images')
    },
    filename:function(req,file,cb){
        cb(null, Date.now() +file.originalname)
    }
})

let upload=multer({
    storage:storage,
    limits:{fileSize:1024*1024*4}
})


router.post('/reg',Regc.registration)
router.post('/logincheck',Regc.logincheck)
router.post('/movieadd',upload.single('file'),moviec.add)
router.get('/printmovies',moviec.allmovie)
router.delete('/moviedelete/:id',moviec.moviedelete)
router.get('/moviedata',moviec.usermovie)
router.post('/addcat',catc.catadd)
router.get('/categoryrecord',catc.categoryrecord)
// router.get('/search',moviec.catsearch)




module.exports=router