const Swimmer = require("../models/Swimmers");
const jwt = require("jsonwebtoken");

const createSwimmers = async (req, res, next) => {
  const decode = jwt.verify(req.cookies.access_token, process.env.JWT);
  const coach_id = decode.id;

  try {
    const newSwimmer = new Swimmer({
      name: req.body.name,
      gender: req.body.gender,
      dob: req.body.dob,
      nationality: req.body.nationality,
      coach_id: coach_id,
    });
    await newSwimmer.save();
    res.status(201).json({ newSwimmer });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteSwimmers = async (req, res, next) => {
  try {
    await Swimmer.findByIdAndDelete(req.params.id);
    res.status(201).json("Swimmer has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateSwimmers = async (req, res, next) => {
  try {
    const newSwimmer = await Swimmer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(newSwimmer);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSwimmer = async (req, res, next) => {
  const swimmer = await Swimmer.findById(req.params.id);

  if(!swimmer){
    res.status(500).json("Swimmer dose not exist!");
  } else {
    res.status(201).json(swimmer);
  }
};

const getAllSwimmers = async (req, res, next) => {
  try {
    const swimmers = await Swimmer.find({});
    res.status(201).json(swimmers);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  createSwimmers,
  deleteSwimmers,
  updateSwimmers,
  getAllSwimmers,
  getSwimmer,
};
