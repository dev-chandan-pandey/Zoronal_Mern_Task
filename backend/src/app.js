const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const companyRoutes = require("./routes/companyRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/companies", companyRoutes);
app.use("/api/reviews", reviewRoutes);

module.exports = app;