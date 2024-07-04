/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
This file was entirely compiled by Tasi. 
*/

export interface Dbase {
	Message: string,
	Status: string,
	Dataset: DatasetDetails[];
}

//interface object for the data to be sent to the api
export interface ReportDataInterface {
	Date:string,
    Shift:string, 
    Crew:string,
    Reporter:string, 
    Incidents:number
}

