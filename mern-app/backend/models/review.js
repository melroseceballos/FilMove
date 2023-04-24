const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    reviewer:{type: String, required: true},
    rate: {type: Number, required: true},
    content: {type: String, required: true},
    movieId: {type: String, required: true},
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: user,
    }
}
    
)

module.exports = mongoose.model('Review', reviewSchema)