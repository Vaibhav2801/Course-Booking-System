const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ConnectionsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  followers: [
    {
    follower:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    time_of_follow:{
        type:Date,
        default:Date.now
    }
    } 
  ],
});

module.exports = Profile = mongoose.model('profile', ConnectionsSchema);
