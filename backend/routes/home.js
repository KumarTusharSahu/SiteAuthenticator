const express = require('express');
const router = express.Router();
const passport = require('passport');

const home_controller=require('../controllers/home_controller');
const block_controller=require('../controllers/blockingtokent_controller')
router.get('/token',passport.checkAuthentication,block_controller.starttoken);
router.get('/home',passport.checkAuthentication,home_controller.ren);
router.post('/token',block_controller.token)
module.exports=router;