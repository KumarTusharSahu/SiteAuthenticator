const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth=require('../controllers/users_controller');
const forget=require('../controllers/forget_controller');

router.post('/link',forget.forgetpass);
router.get('/reset-password/:id/:token',forget.resetpassword);
router.post('/reset-password/:id/:token',forget.reset);
router.get('/login',auth.authentication)
router.post('/create', auth.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/'},
), auth.createSession);
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/'}), auth.createSession);
router.get('/auth/github', passport.authenticate('github',{ scope: [ 'profile','email' ] }));
router.use('/',require('./home'));
// GitHub will call this URL
router.get('/sign-out',auth.destroySession);
router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/user' }),auth.createSession)
module.exports=router;