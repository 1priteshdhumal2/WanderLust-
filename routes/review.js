const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {
  ValidateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleWare.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
// review add route
router.post(
  "/",
  isLoggedIn,
  ValidateReview,
  wrapAsync(reviewController.createReview)
);

//review delete route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
