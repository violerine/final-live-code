const Book = require ("../models/book")

module.exports={
    getBooksByUserId:(req,res,next)=>{
        Book.find({userId:req.params.id})
        .then(book=>{
            res.send(book)
        })
        .catch(err=>{
            res.send(err)
        })
    },

    getAllBooks:(req,res,next)=>{
        Book.find({})
        .then(book=>{
            res.send(book)
        })
        .catch(error=>{
            res.send(error)
        })
    },

    addNewBook:(req,res,next)=>{
        let newBook = new Book({
            userId:req.body.userid,
            title:req.body.title,
            author:req.body.author,
            publisher:req.body.publisher,
            pic_url:req.body.pic_url
        })

        newBook.save((error,book)=>{
            if(error)res.status(500).send(error)
            else{
                Book.find({})
                .then(book=>{
                    res.json(book)
                })
            }
        })
    },

    deleteBook:(req,res,next)=>{
        Book.findByIdAndRemove(req.params.id,(err,result)=>{
            if(err) res.status(500).json(err)
            else{
                res.json({message : "book deleted"})
            }
        })
    }
}