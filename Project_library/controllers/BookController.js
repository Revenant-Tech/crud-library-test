const Books = require("../models/Books");

module.exports = class BookController {

  static createBook(req, res) {
    res.render("books/add");
  } 

  static async showBooks(req, res) {
    const books = await Books.findAll({ raw: true });

    res.render("books/all", { books });
    console.log(books);
  }

  static async createBookSave(req, res) {
    const book = {
      title: req.body.title,
      pages: req.body.pages,
    };

    await Books.create(book);

    res.redirect("/books");
  }

};
