const express = require("express");
const upload = require("../middleware/upload");

const {
  createCompany,
  getCompanies,
  getCompanyById,
} = require("../controllers/companyController");

const router = express.Router();

// router.post("/", createCompany);
router.post("/",upload.single("logo"),createCompany);
router.get("/", getCompanies);
router.get("/:id", getCompanyById);

module.exports = router;