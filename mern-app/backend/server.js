/************ REQUIRING MODULES */
require('dotenv').config()
const express = require('express')
const path = require('path')


/************** REQUIRING DB CONNECTION, MODELS, SEED DATA */
const db = require('./models')

/************** REQUIRING ROOTES FROM CONTROLLERS */
const reviewCTRL = require('./controllers/review')
const usersCTRL = require('./controllers/user')



/************** CREATING EXPRESS APP */
const app = express();


/*************** MIDDLEWARE  */
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))



/*************** MOUTING ROUTES */
app.use('/api/reviews', reviewCTRL)
app.use('/api/users', usersCTRL)



// Any other route not matching the routes above gets routed by React
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'));
});


/*************** PORT */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})