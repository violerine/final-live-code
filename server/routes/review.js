var express = require('express');
var router = express.Router();
var {
  addNewReview,
  deleteReview

}=require ("../controllers/review-controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add',addNewReview)
router.delete('/delete/:id',deleteReview)

module.exports = router;
