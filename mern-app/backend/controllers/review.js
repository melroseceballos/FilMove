/******** REQURING MODELS */
const express = require ('express')
const router = express.Router()


/************ REQUIRING DB CONNECTION AND MODELS */
const db = require ('../models')

/**************** ROUTES */

// INDEX ROUTES 
router.get('/movie/:movieId', function (req, res) {
    db.Review.find({ movieId: req.params.movieId })
        .then(reviews => res.json(reviews))
})

// CREATE ROUTE
router.post('/movie/reviews', (req, res) => {
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
router.delete('/movie/reviews/:id', (req, res) => {
    console.log('deleteroute')
    console.log(req.params.id)
    db.Review.findByIdAndDelete(req.params.id)
        .then((data) => {
            // res.send('You deleted comment ' + req.params.id)
            console.log(data)
        } )
})

// // SIGN UP ROUTE
// router.post('/signup', (req, res) => {
//     // Create a new user
//     db.User.create(req.body)
//         .then(user => {
//             // if the database creates a user successfully, assign a JWT to the user and send the JWT as the response
//             const token = jwt.encode({ id: user.id }, config.jwtSecret)
//             res.json({ token: token })
//         })
//         // send an error if the database fails to create a user
//         .catch(() => {
//             res.sendStatus(401)
//                 .json({ data: 'Could not create a new user, try again' })
//         })
// })

/**************** EXPORTING ROUTES TO SERVER.JS */
module.exports = router
