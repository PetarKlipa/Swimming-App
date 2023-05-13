const express = require('express');
const router = express.Router();

const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user')

router.patch('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getUser)
router.get('/', verifyAdmin,getAllUsers)

module.exports = router;