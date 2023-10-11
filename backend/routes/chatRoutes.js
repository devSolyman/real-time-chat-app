const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { accessChat } = require('../controllers/chatControllers');
const router = express.Router();

router.route('/').post(protect,accessChat);
// router.route('/').get(protect,fetchChats);
// router.route('/group').post(protect,createGroupChat);
// router.route('/rename').put(protect,renameGrop);
// router.route('/groupremove').put(protect,removeFormGroup);
// router.route('/gropadd').put(protect,addGroup);


module.exports = router;
