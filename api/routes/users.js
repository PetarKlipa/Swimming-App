const express = require('express');
const router = express.Router();

const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken')
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user')

router.patch('/:id', verifyAdmin, updateUser)
router.delete('/:id', verifyAdmin, deleteUser)
router.get('/:id', verifyAdmin, getUser)
router.get('/', verifyAdmin,getAllUsers)

module.exports = router;