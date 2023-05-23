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
    console.log(error);
  }
};

const deleteSwimmers = async (req, res, next) => {};

const updateSwimmers = async (req, res, next) => {};

const getSwimmer = async (req, res, next) => {};

const getAllSwimmers = async (req, res, next) => {};

module.exports = {
  createSwimmers,
  deleteSwimmers,
  updateSwimmers,
  getAllSwimmers,
  getSwimmer,
};
