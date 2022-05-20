const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get('/add', BookController.createBook);
router.post('/add', BookController.createBookSave);
router.post('/remove', BookController.removeBook);
router.get('/edit/:id', BookController.updateBook);
router.post('/edit', BookController.updateBookPost);
router.get("/", BookController.showBooks);


module.exports = router;
