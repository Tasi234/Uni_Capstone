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

//calls the model and creates a new instance
const Report = require("./witron.model.js");


//post a new report
exports.create = (req, res) => {
 
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a report
  const report = new Report({
    reportDate: req.body.reportDate,
    shift: req.body.shift,
    crew: req.body.crew,
    reporter: req.body.reporter,
    incidents: req.body.incidents
  });

  // Save report in the database
  Report.create(report, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the report."
      });
    else res.send(data);
  });
};
