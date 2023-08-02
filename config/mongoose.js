const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/employeeReviewSystem');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to MongoDB'));

db.once('open',function(){
    console.log("Connected to Database");
})