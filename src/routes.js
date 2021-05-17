const express = require("express");
const multer = require("multer");
const { deleteAll } = require("./controllers/user/deleteAll");
const { authController } = require("./controllers/user/registerUser");
const { findAll } = require("./controllers/user/findAll");
const { deleteOne } = require("./controllers/user/deleteOne");
const { findOne } = require("./controllers/user/findOne");
const { updateOne } = require("./controllers/user/updateUser");
const {
  registerWorkWithUs,
  countWorksOportunities,
} = require("./controllers/workWithUs/registerCV");
const multerConfig = require("./config/multer");
const { registerContact } = require("./controllers/contact/registerContact");

const router = express.Router();

//Work With Us
router.put(
  "/work_with_us",
  multer(multerConfig).single("cv"),
  registerWorkWithUs
);
router.get("/work_with_us", countWorksOportunities);

//Contact´s Router Props
router.post("/contact", registerContact);

//User´s Props Router Props
router.get("/user", findAll);
router.get("/user/:id", findOne);
router.post("/user/register", authController);
router.put("/user/:id", updateOne);
router.delete("/user", deleteAll);
router.delete("/user/:id", deleteOne);

module.exports = router;
