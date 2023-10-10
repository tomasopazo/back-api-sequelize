const express = require ('express');
const router= express.Router();
const userController= require('../controllers/userControllers');

router.get('/getUsers', userController.getAllUsers);
router.post('/NewUser', userController.createUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.put('/updateUser/:id', userController.updateUser);


// crear put y delete

module.exports=router;