const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 1
  }
});

var Todo = mongoose.model('todos', userSchema);
