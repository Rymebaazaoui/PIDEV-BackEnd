var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = new Schema({
  
   title:{
    type: String,
    trim: true,
    required:'please enter a Title for the Question post!',
   },

   content:{
    type: String,
    trim: true,
    required: "Enter a question content",
   },

   created: {
    type: Date,
    default: Date.now,

   },
    
   comments:[{

    type:mongoose.Schema.Types.ObjectId,
    ref: "comment"
}],


   author:{
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: "Comment should have a valid User",
   },
  
    comments:[{

              type:  mongoose.Schema.Types.ObjectId,
              ref:   "comment"
}],

likes :{

   type : Number,
   min: 0

}



    



    


    
    
    
})

module.exports = mongoose.model("post", Post);