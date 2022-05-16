const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get("/", BookController.showBooks);

module.exports = router;
