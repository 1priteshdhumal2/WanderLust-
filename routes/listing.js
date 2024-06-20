const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, ValidateListing } = require("../middleWare.js");
const listingController = require("../controllers/listing.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  // .post(
  //   isLoggedIn,
  //   ValidateListing,
  //   wrapAsync(listingController.renderCreateForm)
  // );
  .post((req, res) => {
    res.send(req.body);
  });

//New Route
router.get("/new", isLoggedIn, listingController.renderNewform);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    ValidateListing,
    wrapAsync(listingController.renderUpdateForm)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.renderDeleteForm));

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
