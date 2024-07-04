/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
All code used in this file was inspired by:
- PROG2002-2023-T4 unit content and related assessment pieces
This file was entirely compiled by Tasi. 
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportData } from '../models/report.model';


@Injectable({ providedIn: 'root' })

export class ReportService {
	constructor(private http:HttpClient){
	}

	private url:string="http://localhost:8080/witron/reports";  //whats the correct port to use here?

	//post method
	public postReport(
		date:string,
	    shift:string, 
	    crew:string,
	    reporter:string, 
	    incidents:number
						):Observable<ReportData>{
		return this.http.post<ReportData>(this.url,{
			"DATE":date,
			"SHIFT":shift,
			"CREW":crew,
			"REPORTER":reporter,
			"INCIDENTS":incidents
		});
	}
}