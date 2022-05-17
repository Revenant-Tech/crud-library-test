const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get('/add', BookController.createBook)
router.post('/add', BookController.createBookSave)
router.get("/", BookController.showBooks);

module.exports = router;
