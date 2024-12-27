const Visitor = require("../models/Visitor");

exports.registerVisitor = async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.status(201).json(visitor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVisitorActivity = async (req, res) => {
  try {
    const visitors = await Visitor.find().populate("visitedAttractions");
    res.json(visitors.map(visitor => ({
      name: visitor.name,
      email: visitor.email,
      reviewCount: visitor.visitedAttractions.length,
    })));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
