const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, ValidateListing } = require("../middleWare.js");
const listingController = require("../controllers/listing.js");

//index Route
router.get("/", wrapAsync(listingController.index));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewform);

//Show Route
router.get("/:id", wrapAsync(listingController.showListing));

//Create Route
router.post(
  "/",
  isLoggedIn,
  ValidateListing,
  wrapAsync(listingController.renderCreateForm)
);

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

//Update route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  ValidateListing,
  wrapAsync(listingController.renderUpdateForm)
);

//Delete route
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderDeleteForm)
);

module.exports = router;
