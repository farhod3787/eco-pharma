const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const pharmacyRouter = require('./routes/pharmacy');
const userRouter = require('./routes/users')
const categoriesRouter = require('./routes/categories')
const podcategoryRouter = require('./routes/pod-category')
const orderRouter = require('./routes/orders');
const personRouter = require('./routes/person');
const botRouter = require('./routes/bot')
const retseptRouter = require('./routes/retsept')
const cors = require("cors");
const app = express();

app.use(cors());


mongoose.connect('mongodb+srv://farhod:7Q8SfcHx.F2J.HG@cluster0-uf7cc.mongodb.net/online-pharmacy?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(err => console.log(err));

// mongoose.connect("mongodb://localhost:27017/online-pharmacy").then( () => {
//     console.log('Connected to database')
// })
// .catch( () =>{
//     console.log('Error in connected database')
// });



module.exports = { mongoose };


// app.use(express.bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, '../dist/online-pharmacy')))

app.use('/images', express.static(path.join("backend/images")));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-Width, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next()
});


//                                                          P H A R  M A C Y

app.use('/api/pharm/', pharmacyRouter);

//                                                            U S E R S

app.use('/api/users/', userRouter);

//                                                              P E R S O N

app.use('/api/person/', personRouter)


//                                                          C A T E G  O R I E S

app.use('/api/categories/', categoriesRouter);

//                                                        POD CATEGORY

app.use('/api/podcategory/', podcategoryRouter)

//                                                         O R D E R S

app.use('/api/orders/', orderRouter);



//                                                       B  O  T

app.use('/api/bot/', botRouter);

//                                                      Retsept

app.use('/api/retsept/', retseptRouter)


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/online-pharmacy', 'index.html'))
})

module.exports = app;