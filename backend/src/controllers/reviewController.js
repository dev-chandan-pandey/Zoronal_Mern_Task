const Company = require("../models/Company");
const Review = require("../models/Review");

exports.addReview = async (req, res) => {
  try {
    const { companyId } = req.params;

    const review = await Review.create({
      ...req.body,
      company: companyId,
    });

    const company = await Company.findById(companyId);

    const totalRating =
      company.averageRating * company.reviewCount;

    company.reviewCount += 1;

    company.averageRating =
      (totalRating + review.rating) /
      company.reviewCount;

    await company.save();

    res.status(201).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const { companyId } = req.params;

    const { sort = "latest" } = req.query;

    let sortOption = {};

    if (sort === "rating") {
      sortOption.rating = -1;
    } else {
      sortOption.createdAt = -1;
    }

    const reviews = await Review.find({
      company: companyId,
    }).sort(sortOption);

    res.status(200).json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.likeReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);

    review.likes += 1;

    await review.save();

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};