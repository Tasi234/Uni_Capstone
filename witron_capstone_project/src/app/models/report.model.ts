/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
All code used in this file was inspired by:
- PROG2002-2023-T4 unit content and related assessment pieces
This file was entirely compiled by Tasi. 
*/

//model/class template for the data to be sent to the api

export class ReportData {
	DATE?:string;
    SHIFT?:string; 
    CREW?:string;
    REPORTER?:string;
    INCIDENTS?:number;

    contructor(d:string, s:string, c:string, r:string, i:number){
        this.DATE=d;
        this.SHIFT=s;
        this.CREW=c;
        this.REPORTER=r;
        this.INCIDENTS=i;
    }
}