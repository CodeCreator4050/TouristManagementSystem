const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Import routes
const attractionRoutes = require("./routes/attractionRoutes");
const visitorRoutes = require("./routes/visitorRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/tourist-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/attractions", attractionRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/reviews", reviewRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
