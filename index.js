const express = require('express');
const mongoose = require('mongoose');
const {mongooseURI} = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const keys = require('./config/keys')

require('./services/passport');
require('./models/user');
mongoose.connect(keys.mongooseURI);

const port = process.env.PORT || 3000;

app.use(cookieSession ({
 maxAge: 30*60*24*60*1000,
 keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.listen(port, ()=>{
  console.log(`Start on port ${port}`);
});
