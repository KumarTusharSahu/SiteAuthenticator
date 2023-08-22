const express = require('express');
const router = express.Router();
const passport = require('passport');

const home_controller=require('../controllers/home_controller');

router.get('/home',passport.checkAuthentication,home_controller.ren);

module.exports=router;