const express = require('express');
const router = express.Router();

const {getPosts, newPost} = require('../controllers/postController')

router.route('/post').get(getPosts)
router.route('/post/new').post(newPost)

module.exports = router;