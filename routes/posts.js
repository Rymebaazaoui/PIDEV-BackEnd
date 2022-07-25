var express = require('express');
var Post = require('../model/post');
const { post } = require('./comments');
var router = express.Router();



router.get('/', function(req, res) {
    Post.find((err , data)=>{
        if(err) throw err;
        res.json(data);

    });
  
});

router.post("/add", (req, res) => {
    const title = req.body.title
    const content = req.body.content
    const created = req.body.created
    const author = req.body.author
    const likes = req.body.likes
    const comments= req.body.comments
    
    
    const newPost= new Post({
      title,
      content,
      created,
      author,
      likes,
      comments,
      

      
    })
    newPost
      .save()
      .then(() => res.json("New Post created!"))
      .catch(err => res.status(400).json("Error: " + err))
  })




router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id).then((post) => {
        if (!post) {
            return res.status(404).send();
        }
     
        res.send(post);
        
    }).catch((error) => {
        res.status(500).send(error);
    });
});


router.put('/:id', (req, res) => {
    const {id: _id} = req.params 
    const{title}=req.body
    const {content} = req.body
    const {created} = req.body
    const {author} = req.body
    const {comments}= req.body
    

    const newPost = {
     _id, 
     
     title,content,created,author,comments
    }
  
    Post.findByIdAndUpdate(
      _id,
      newPost,
      (err, updatedPost) => {
        if (err) {
          res.json({
            newPost,
            success: false,
            msg: 'Failed to update Post'
          })
        } else {
          res.json({newPost, success: true, msg: 'Post updated '})
        }
      }
    )
  })




module.exports = router;
