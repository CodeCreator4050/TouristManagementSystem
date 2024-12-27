const Review = require("../models/Review");
const Attraction = require("../models/Attraction");

exports.postReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();

    const reviews = await Review.find({ attraction: review.attraction });
    const averageRating = reviews.reduce((sum, r) => sum + r.score, 0) / reviews.length;

    await Attraction.findByIdAndUpdate(review.attraction, { ratings: averageRating });
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
