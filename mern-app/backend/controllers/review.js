/******** REQURING MODELS */
const express = require ('express')
const router = express.Router()


/************ REQUIRING DB CONNECTION AND MODELS */
const db = require ('../models')

/**************** ROUTES */

// INDEX ROUTES 
router.get('/', function (req, res) {
    db.Review.find({})
        .then(reviews => res.json(reviews))
})

// CREATE ROUTE
router.post('/', (req, res) => {
    db.Review.create(req.body)
        .then(reviews => res.json(reviews))
})

// SHOW ROUTE
router.get('/:id', function (req, res) {
    db.Review.findById(req.params.id)
        .then(reviews => res.json(reviews))
})

// UPDATE ROUTE
router.put('/:id', (req, res) => {
    db.Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(reviews => res.json(reviews))
})

// Destroy Route (DELETE/Delete)
router.delete('/:id', (req, res) => {
    db.Review.findByIdAndRemove(req.params.id)
        .then(() => res.send('You deleted comment ' + req.params.id))
})

/**************** EXPORTING ROUTES TO SERVER.JS */
module.exports = router
