const express = require ('express');
const router= express.Router();
const publiController= require('../controllers/postControllers');

router.get('/getPosts', publiController.getAllPosts);
router.post('/NewPost', publiController.createPost);
router.delete('/deletePost/:id', publiController.deletePost);
router.put('/updatePost/:id', publiController.updatePost);


// crear put y delete

module.exports=router; 