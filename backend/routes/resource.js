const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");

router.get("/api/resources", async (req, res) => {
  try {
    const resources = await Resource.find().sort({ createdAt: -1 });
    res.json(resources);
  } catch (err) {
    console.error("Error fetching resources:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/api/resources", async (req, res) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    console.error("Error creating resource:", err);
    res.status(400).json({ message: err.message });
  }
});

router.post("/api/resources/:id/like", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  resource.likes++;
  await resource.save();
  res.json(resource);
});

router.post("/api/resources/:id/unlike", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  resource.likes--;
  await resource.save();
  res.json(resource);
});

router.delete("/api/resources/:id", async (req, res) => {
  const { id } = req.params;
  await Resource.findByIdAndDelete(id);
  res.json({ message: "Resource deleted successfully" });
});

router.put("/api/resources/:id", async (req, res) => {
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

router.get("/api/resources/:id/likes", async (req, res) => {
  const { id } = req.params;
  const resource = await Resource.findById(id);
  res.json(resource.likes);
});

module.exports = router;
