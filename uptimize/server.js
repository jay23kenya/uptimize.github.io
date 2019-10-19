const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const app = express()


// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('dev'))

// Cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 
//    'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 
//         'PUT, GET, POST, PATCH, DELETE')
//         return res.status(200).json({})
//     }
//  })


// Api initializers
const contact = require('./api/routes/Contact')



// DB Config
const db = require('./config/keys').mongoURI
const options = {
    dbName: "DB",
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connnect to Mongo
mongoose.connect (process.env.MONGODB_URI || db, options)
    .then(() => console.log('Connected to the Database'))
    .catch((err) => console.log(err))

// Api Routes
app.use('/api/contact', contact)


//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message:error.message
        }
    })
})


// Listen UP!
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on port ${port}`))