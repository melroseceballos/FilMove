const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewer:{type: String, required: true},
    rate: {type: Number, required: true},
    content: {type: String, required: true},
}
    
)

module.exports = mongoose.model('Review', reviewSchema)