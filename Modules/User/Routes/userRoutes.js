const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController')
router.post('/createuser', userController.createUser)
router.get('/getbyid/:id', userController.getUserById )
router.get('/getalluser', userController.getAllUser)
router.put('/updateuser/:id', userController.updateUser)
router.delete('/deleteuser/:id', userController.deleteUser)

module.exports = router