var Comment = require("../model/comment");

var CommentController={

    

    Search: async(req,res)=>{
        let result = await Comment.find({
            "$or":[
    
                {article: {$regex: req.params.key}
    
    
                }
            ]
        });



    }
}

module.exports= CommentController;