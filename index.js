const express = require('express');
const mongoose = require('mongoose');
const {mongooseURI} = require('./config/keys');
const app = express();

require('./services/passport');
require('./models/user');
require('./routes/authRoutes')(app);
mongoose.connect(mongooseURI || 'mongodb://localhost:27017/TodoApp');

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Start on port ${port}`);
});
