/******** REQURING MODELS */
const express = require ('express')
const router = express.Router()


/************ REQUIRING DB CONNECTION AND MODELS */
const db = require ('../models')

/**************** ROUTES */

// INDEX ROUTES 
router.get('/movie/:movieId', function (req, res) {
    db.Review.find({ movieId: req.params.movieId })
        .then(reviews =>{
            res.json(reviews)
        }
        
        )
        
})
//  REVIEW SHOW ROUTE FOR EDIT FORM
router.get('/:movieId', function (req, res) {
    db.Review.findById(req.params.movieId)
        .then(reviews =>{
            res.json(reviews)
        }
        
        )
        
})
// CREATE ROUTE
router.post('/movie/reviews', (req, res) => {
    db.Review.create(req.body)
        .then(reviews => res.json(reviews))
})

// SHOW ROUTE
router.get('/:id', function (req, res) {
    console.log(req.params.id)
    db.Review.findById(req.params.id)
        .then(reviews => res.json(reviews))
})

// UPDATE ROUTE
router.put('/:reviewid', (req, res) => {
    db.Review.findByIdAndUpdate(
        req.params.reviewid,
        req.body,
        { new: true }
    )
        .then(reviews => res.json(reviews))
})

// Destroy Route (DELETE/Delete)
router.delete('/movie/reviews/:id', (req, res) => {
    db.Review.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('You deleted comment ' + req.params.id)
           
        } )
})

/**************** EXPORTING ROUTES TO SERVER.JS */
module.exports = router
