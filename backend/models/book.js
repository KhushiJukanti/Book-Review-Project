const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
    id: Number,
    BookTitle: String,
    BookAuthor: String,
    BookDec: String,
    assigned: {
        type: Boolean,
        require: true,
        default: 'false'
    }
})

module.exports = mongoose.model("book", BookSchema)