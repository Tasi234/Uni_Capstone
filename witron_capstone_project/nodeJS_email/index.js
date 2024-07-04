// //https://dev.to/chabbasaad/sending-email-using-nodejs-and-nodemailer-with-angular-app-contact-form-5c58

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());




//troubleshooting
app.get('/email', handleGetRequest);

app.post('/email', handlePostRequest);

function handleGetRequest(req, res) {

//app.get('/email', (req,res) => {
	res.send('Email node received get');
	res.end();
};

function handlePostRequest(req, res) {
// app.post('/email', (req, res) => {
	const reportDate = req.body.reportDate;
	const shift = req.body.shift;
	const crew = req.body.crew;

	// Set up the transporter
	let transporter = nodemailer.createTransport({
	    host: 's04dd.syd6.hostingplatform.net.au',
	    port: 587, //try 465 or 2525
	    //secure: true,
	    auth: {
	      user: 'noreply@logicloom.info', 
	      pass: 'DLd(v2t!}2{V'
	    }
	});

	// Set up the email options
	let mailOptions = {
	    from: 'noreply@logicloom.info',
	    to: 'tasitheo@outlook.com.au', 
	    subject: 'New Report',
	    text: //'test'
	    html:
	    ``
	    	`
		      ReportDate: ${reportDate}
		      Shift: ${shift}
		      Crew: ${crew}
		    `
	};

	// Send the email
	transporter.sendMail(mailOptions, function(error, info){
	    if (error) {
	        res.status(500).send('Internal Server Error' + error);
	    } else {
	    		res.status(200).send('Email sent: ' + info.response);
	    }
	});
};

//Server Startup
app.listen(port, console.log(`Server started on port ${port}`));
