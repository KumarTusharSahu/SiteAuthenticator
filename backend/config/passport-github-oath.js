const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const crypto = require('crypto');
const User = require('../models/user');


// tell passport to use a new strategy for google login
passport.use(
    new GitHubStrategy(
      {
        clientID: "c2f7b8214db29cbfc587",
        clientSecret: "8fa9144d84730f10ea1cab30a8f3640f511757e2",
        callbackURL: 'http://localhost:8000/users/auth/google/callback',
      },
      function(accessToken, refreshToken, profile, done){
        // find a user
        User.findOne({email: profile.emails[0].value}).exec(function(err, user){
            if (err){console.log('error in github strategy-passport', err); return;}
            console.log(accessToken, refreshToken);
            console.log(profile);

            if (user){
                // if found, set this user as req.user
                return done(null, user);
            }else{
                // if not found, create the user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email:profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                }, function(err, user){
                    if (err){console.log('error in creating user github strategy-passport', err); return;}

                    return done(null, user);
                });
            }

        }); 
    }
  ));


module.exports = passport;
