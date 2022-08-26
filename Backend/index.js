const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors') 

mongoose.connect('mongodb://localhost:27017/notebook')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})
const app = express();
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
    res.send('home')
});
app.listen(5000, () => {
    console.log("APP IS LISTENING ON PORT 5000!")
})
