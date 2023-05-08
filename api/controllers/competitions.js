const Competition = require("../models/Competition");

const createComptition = async (req, res, next) => {
  try {
    const newCompetition = new Competition({
      name: req.body.name,
      gender: req.body.gender,
      date: req.body.date,
      location: req.body.location,
      distance: req.body.distance,
      style: req.body.style,
    });
    await newCompetition.save();
    res.status(201).json({ newCompetition });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteCompetition = async (req, res, next) => {
  try {
    await Competition.findByIdAndDelete(req.params.id);
    res.status(201).json("Competition has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCompetition = async (req, res, next) => {
  try {
    const updateCompetition = await Competition.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(updateCompetition);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCompetition = async (req, res, next) => {
  const competition = await Competition.findById(req.params.id);

  if (!competition) {
    res.status(500).json("Competition dose not exist!");
  } else {
    res.status(201).json(competition);
  }
};

const getAllCompetitions = async (req, res, next) => {
  try {
    const competitions = await Competition.find({});
    res.status(201).json(competitions);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createComptition,
  deleteCompetition,
  updateCompetition,
  getAllCompetitions,
  getCompetition,
};
