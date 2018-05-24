var express = require('express');
var router = express.Router();
var {
  addNewBook,
  deleteBook,
  getBooksByUserId,
  getAllBooks
}=require('../controllers/book-controller')

const images = require('../helpers/uploadpic')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/upload',images.multer.single('image'),
images.sendUploadToGCS,(req,res)=>{
  res.send({
    status:200,                                                                                                                                                                                                                                                                                                                                  
    message:'Your file uploaded',
    link:req.file.cloudStoragePublicUrl
  }) 
})

router.get('/',getAllBooks)
router.post('/add',addNewBook)
router.delete('/delete/:id',deleteBook)


module.exports = router;
