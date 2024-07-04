/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
All code for this API was inspired by:
- PROG2002-2023-T4 unit content and related assessment pieces
- www.bezkoder.com/node-js-rest-api-express-mysql/
Accessed January 2024
This API was entirely compiled by Tasi. 
*/


//import the modules
var express = require("express");
var cors = require("cors");
var mysql = require('mysql2');

var app = express();

// app.use(cors(corsOptions));

// Enable CORS for all routes
app.use(cors({ origin: '*' }));


//creates the express app
//parse request of content-type - applicaton/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
//Nehemia alteration
//app.use(express.urlencoded({extended: true}));
app.use("/witron",express.urlencoded({extended: true}));



//simple get to display on the index page
app.get("/test", (req, res) => {
	res.json({ message: "You did a thing, good job"});
});


//set port, listen for requests
const port = process.env.port || 8080;

require("./app/witron.routes.js")(app);

app.listen(port, () => {
	console.log(`server is running on port ${port}.`);
});

