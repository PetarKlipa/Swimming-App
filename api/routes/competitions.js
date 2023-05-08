const express = require("express");
const router = express.Router();

const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const {
  createComptition,
  deleteCompetition,
  getAllCompetitions,
  getCompetition,
  updateCompetition,
} = require("../controllers/competitions");

router.get("/", getAllCompetitions);
router.get("/:id", getCompetition);
router.delete("/:id", verifyAdmin, deleteCompetition);
router.patch("/:id", verifyAdmin, updateCompetition);
router.post("/", verifyAdmin, createComptition);

module.exports = router;
