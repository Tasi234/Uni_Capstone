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

const sql = require("./db.js");

//construct the report
const Report = function(report) {
	this.reportDate = report.reportDate;
	this.shift = report.shift;
	this.crew = report.crew;
	this.reporter = report.reporter;
	this.incidents = report.incidents;
};

//generate the sql command
Report.create = (newReport, result) => {
	sql.query("INSERT into shift_report SET ?", newReport, (err, res) => {
		if (err) { 
			console.log("error: ", err);
			result(err, null);
			return;
		}

		console.log("Created Report: ", { id: res.insertId, ...newReport });
		result(null, { id: res.insertId, ...newReport });
	});
};

module.exports = Report;