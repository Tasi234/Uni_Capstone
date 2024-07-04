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

module.exports = app => {
	const reports = require("./witron.controller.js");

	var router = require("express").Router();

	//create a new report
	router.post("/", reports.create);

	app.use('/witron/reports', router);
};