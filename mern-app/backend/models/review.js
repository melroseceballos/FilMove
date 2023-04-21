const mongoose = require('moongose')

const reviewSchema = new mongoose.Schema({
    reviewer:{type: String, required: true},
    rate: {type: String, required: true},
    content: {type: String, required: true},
}
    
)