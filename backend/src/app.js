const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const companyRoutes = require("./routes/companyRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/reviews", reviewRoutes);

module.exports = app;