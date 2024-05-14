const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require('method-override');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride('_method'));

main().then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

//index Route
app.get("/listings",async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

//show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

//Create Route
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

//Edit route
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//Update route
app.put("/listings/:id",async (req, res) => {
    let {id} = req.params;
    const list = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         country : "India"
//     });

//     await sampleListing.save();
//     console.log("sameple was saved");
//     res.send("successful testing");
// });
