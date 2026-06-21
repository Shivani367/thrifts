console.log("HEllo");
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Google Route Works");
});
router.get("/test", (req, res) => {
  res.send("Google Auth Route Working");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
  
);

module.exports = router;