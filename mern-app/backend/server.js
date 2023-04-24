/************ REQUIRING MODULES */
require('dotenv').config()
const express = require('express')


/************** REQUIRING DB CONNECTION, MODELS, SEED DATA */
const db = require('./models')

/************** REQUIRING ROOTES FROM CONTROLLERS */
const reviewCTRL = require('./controllers/review')
// const usersCTRL = require('./controllers/user')



/************** CREATING EXPRESS APP */
const app = express();


/*************** MIDDLEWARE  */
app.use(express.urlencoded({extended: true}))
app.use(express.json())


/*************** MOUTING ROUTES */
app.use('/api/reviews', reviewCTRL)
// app.use('/api/users', usersCTRL)


/*************** PORT */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})