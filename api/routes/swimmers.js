const express = require("express");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../utils/verifyToken");
const { createSwimmers } = require("../controllers/swimmers");

router.post('/',verifyUser, createSwimmers)


module.exports = router;