const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");

const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// EJS for templating
app.set("view engine", "ejs");

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
// Import Routes
const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Use Routes

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/users", userRoutes);
app.use("/stores", storeRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
