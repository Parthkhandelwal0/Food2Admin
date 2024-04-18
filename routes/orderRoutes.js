const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  const orders = await Order.find().populate("user");
  res.render("orders", { orders });
});

module.exports = router;
