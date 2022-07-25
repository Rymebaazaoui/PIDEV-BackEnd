var express = require('express');

var Comment = require('../model/comment');
var router = express.Router();




router.get('/', function(req, res) {
    Comment.find((err , data)=>{
        if(err) throw err;
        res.json(data);

    });
  
});

router.post("/add", (req, res) => {
    const article = req.body.article
    const comment = req.body.comment
    const author  = req.body.author
    const created = req.body.created
    
    const like = req.body.like
  
    
    const newComment= new Comment({
      article,
      comment,
      author,
      created,
      like,
      
      
    })
    newComment
      .save()
      .then(() => res.json("New Comment created!"))
      .catch(err => res.status(400).json("Error: invalid article or user"))
  })




router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then((comment) => {
        if (!comment) {
            return res.status(404).send();
        }
        res.send(comment);
    }).catch((error) => {
        res.status(500).send(error);
    });
});


router.put('/:id', (req, res) => {
    const {id: _id} = req.params 
    const{article}= req.body
    const {comment} = req.body
    const {author} = req.body
    const {created} = req.body
    const {like}= req.body
    

    const newComment = {
     _id, 
     
    article,comment,author,created,like
    }
  
    Comment.findByIdAndUpdate(
      _id,
      newComment,
      (err, updatedComment) => {
        if (err) {
          res.json({
            newComment,
            success: false,
            msg: 'Failed to update Comment'
          })
        } else {
          res.json({newComment, success: true, msg: 'Comment updated '})
        }
      }
    )
  })


//router.get("/evaluations/delete:id", deleteEvaluationById);

router.post("/like/:id", (req,res)=>{
  Comment.findById(req.params.id, function(err, comment){
      if(err){
          console.log(err);
          return res.status(500).send('Something went wrong!'); // You should notify user about any error    
      } else {
          comment.like += 1;
          res.json({comment,success: true,msg: 'liked!!!!!'})
          comment.save(function(err){
          if(err) return res.status(500).send('Something went wrong!');
          return res.send({likes_count: comment.likes});
          });

      }
  });
});

router.post("/dislike/:id", (req,res)=>{
  Comment.findById(req.params.id, function(err, comment){
      if(err){
          console.log(err);
          return res.status(500).send('Something went wrong!'); // You should notify user about any error    
      } else {
          comment.like -= 1;
          res.json({comment,success: true,msg: 'unliked!!!!'})
          comment.save(function(err){
          if(err) return res.status(500).send('Something went wrong!');
          return res.send({likes_count: comment.likes});
          });

      }
  });
});

module.exports = router;


