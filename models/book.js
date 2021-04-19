const mongoose = require('mongoose')
const Schema = mongoose.Schema

const booksSchema = new Schema({
  googleId: { type: String, required: true },
  authors: [String],
  description: { type: String },
  cover: { type: String },
  link: { type: String },
  title: { type: String },

  date: { type: Date, default: Date.now },
})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books
