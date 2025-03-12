const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const Resource = require("./models/Resource");

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/resourcehub")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/api/resources", async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    console.error("Error fetching resources:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/resources", async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    console.error("Error creating resource:", err);
    res.status(400).json({ message: err.message });
  }
});

app.post("/api/resources/:id/like", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  resource.likes++;
  await resource.save();
  res.json(resource);
});

app.post("/api/resources/:id/unlike", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  resource.likes--;
  await resource.save();
  res.json(resource);
});

app.delete("/api/resources/:id", async (req, res) => {
  const { id } = req.params;
  await Resource.findByIdAndDelete(id);
  res.json({ message: "Resource deleted successfully" });
});

app.put("/api/resources/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, url, category, tags } = req.body;
  const resource = await Resource.findByIdAndUpdate(id, {
    title,
    description,
    url,
    category,
    tags,
  });
  res.json(resource);
});

app.get("/api/resources/:id/likes", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  res.json(resource.likes);
});

app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
