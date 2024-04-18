// routes/storeRoutes.js
const express = require("express");
const router = express.Router();
const Store = require("../models/Store");
const Product = require("../models/Product");

// Get all stores with their products
router.get("/", async (req, res) => {
  try {
    const stores = await Store.find({});
    const storesWithProducts = await Promise.all(
      stores.map(async (store) => {
        const products = await Product.find({ store: store._id });
        return {
          ...store._doc,
          products,
        };
      })
    );
    res.render("stores", { stores: storesWithProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching stores" });
  }
});

module.exports = router;
