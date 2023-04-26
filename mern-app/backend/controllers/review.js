/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple');
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


/* Middleware that checks if a JWT sent from the client is valid.
   Used for all routes that require authorization
--------------------------------------------------------------- */
const authMiddleware = (req, res, next) => {
    // Check if the 'Authorization' header is present and has the token
    const token = req.headers.authorization;
    if (token) {
        try {
            console.log('1')
            // Decode the token using the secret key and add the decoded payload to the request object
            const decodedToken = jwt.decode(token, config.jwtSecret);
            console.log('2')
            req.user = decodedToken;
            next();
        } catch (err) {
            // Return an error if the token is invalid
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // Return an error if the 'Authorization' header is missing or has the wrong format
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};


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
// // CREATE ROUTE
// router.post('/movie/reviews', (req, res) => {
//     db.Review.create(req.body)
//         .then(reviews => res.json(reviews))
// })

////////// REVISED USER CREATE ROUTE
router.post('/movie/reviews', authMiddleware, (req, res) => {
    res.send("hello")
    // Perform any actions that require authorization
    // db.Review.create({
    //     ...req.body,
    //     // The auth middleware validated the JWT token 
    //     // and added the decoded payload to the req.user object
    //     userId: req.user.id
    // })
    //     .then(reviews => res.json(reviews))
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
