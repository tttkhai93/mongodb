const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


// console.developers.google.com to get google authen api
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done)=>{
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
}));

module.exports = {passport};
