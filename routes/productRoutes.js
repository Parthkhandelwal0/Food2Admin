const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find().populate("store");
  res.render("products", { products });
});

module.exports = router;
