const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  status: {
    type: String,
    required: true
  },
   followers:{
    type:Number,
    default:0
   },
   folllowing:{
    type:Number,
    default:0
   },
   timeline:[
     {
      tweet:{
        type:Schema.Types.ObjectId,
        ref:'posts'
      }
     }
   ],
   commented_tweets:[
    {
      tweet:{
        type:Schema.Types.ObjectId,
        ref:'posts'
      }
     }
   ],
   liked_tweets:[
    {
      tweet:{
        type:Schema.Types.ObjectId,
        ref:'posts'
      }
     }
   ],
   media:[{
    type:String
   }],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
 
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
