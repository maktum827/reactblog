const express = require('express')
const app = express();
// const dotenv = require('dotenv');
const path = require('path')

// Setting up config file to work payment method properly with api key
// if (process.env.NODE_ENV === 'DEVELOPMENT'){
//     dotenv.config({path: 'backend/config/config.env'})
// }


app.use(express.json());

// Import all routes 
const posts = require('./routes/post')

app.use('/api/v1', posts)

// for production (running backend and frontend at a time) 
if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}


module.exports = app