const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
// const port = process.env.PORT || 5000;
app.set('port', process.env.PORT || 5000);
console.log("++++++++++++++++" + app.get('port'));

app.use(cors());
app.use(express.json());

app.use(express.static('./client/build'));



const uri = process.env.ATLAS_URI;

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build",     
    "index.html"));
 });
 
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established sucessfully.")
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
}) 