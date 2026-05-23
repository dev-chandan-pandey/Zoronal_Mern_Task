const express = require("express");

const {
  addReview,
  getReviews,
  likeReview,
} = require("../controllers/reviewController");

const router = express.Router();

router.post("/:companyId", addReview);
router.get("/:companyId", getReviews);
router.patch("/like/:reviewId", likeReview);

module.exports = router;