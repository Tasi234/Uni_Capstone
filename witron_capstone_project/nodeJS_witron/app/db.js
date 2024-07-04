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

const mysql = require("mysql2");
const dbConfig = require("./db.config.js");

//create a connection to the database using the data from db.config i guess?
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

//open the mysql connection
connection.connect(error => {
	if (error) throw error;
	console.log("connected! good job");
});

module.exports = connection;