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
      done: false,
    };

    await Books.create(book);


    res.redirect("/");
  }

  static async removeBook(req, res) {
    const id = req.body.id;

    await Books.destroy({ where: { id: id } });

    res.redirect("/");
  }

  static async updateBook(req, res) {
    const id = req.params.id;

    const book = await Books.findOne({ where: { id: id }, raw: true });

    res.render("books/edit", { book });
  }

  static async updateBookPost(req, res) {
    const id = req.body.id;

    const book = {
      title: req.body.title,
      pages: req.body.pages,
    };

    await Books.update(book, { where: { id: id } });

    res.redirect("/");
  }

  


};
