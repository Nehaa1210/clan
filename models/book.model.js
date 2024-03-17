const {Schema,model} = require('mongoose');

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    ISBN: String,
    available: Boolean,
    status:String,
    ownedBy:String
  }
  );

const BookModel = model('Book',bookSchema);

module.exports = BookModel