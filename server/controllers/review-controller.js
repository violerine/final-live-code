const Review = require ("../models/review")

module.exports={
    addNewReview:(req,res)=>{
        let newReview = new Review({
            userId :req.body.userid ,
            review:req.body.review,
        })
        
        newReview.save((error,review)=>{
            if(error) res.status(500).send(error)
            else{
                return res.json(review)
            }
        })
    },

    deleteReview:(req,res,next)=>{
        Review.findByIdAndRemove(req.params.id,(err,result)=>{
            if(err) res.status(500).json(err)
            else{
                res.json({message : "reivew deleted"})
            }
        })
    },
}