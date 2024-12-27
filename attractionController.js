const Attraction = require("../models/Attraction");

exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAttraction = async (req, res) => {
  try {
    const attraction = new Attraction(req.body);
    await attraction.save();
    res.status(201).json(attraction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTopRatedAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find().sort({ ratings: -1 }).limit(5);
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
