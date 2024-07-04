/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
This file was entirely compiled by Tasi. 
**Remains functionally unchanged from Sprint 1**
*/

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { ReactiveFormsModule, Validators, FormGroup, FormControl, NgForm, FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CSVService } from './services/csv.service';
import { ReportService } from './services/report.service';
import { EmailReportService } from './services/email-report.service';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  csvService = inject(CSVService);
  emailReportService = inject(EmailReportService);
  //reportService = inject(ReportService);
  
  //date variable declaration
  currentDate: Date = new Date;
  currentDateString:string = '';

  //shift dropdown
  shiftOptions = [ 
      { label: 'Day', value: 'day' },
      { label: 'Evening', value: 'evening' },
      { label: 'Night', value: 'night' },
    ];
  shiftSelected: string = this.shiftOptions[0].label;

  //crew dropdown
  crewOptions = [ 
      { label: 'Crew A', value: 'crewA' },
      { label: 'Crew B', value: 'crewB' },
      { label: 'Crew C', value: 'crewC' },
      { label: 'Crew D', value: 'crewD' },
      { label: 'Crew E', value: 'crewE' },
    ];
  //sets the default option
  crewSelected: string = this.crewOptions[0].label;

  //constructor() {}

  ngOnInit(): void {
    this.currentDate = new Date;
    this.currentDateString = formatDate( this.currentDate, 'EEEE, d MMM y', 'en-AU');
    this.shiftSelected = "day";
    this.crewSelected = "crewA";
  }

  title = 'witron_project';

//--------------------------------DatasheetForm Declarations--------------------------------
  datasheetForm: FormGroup = new FormGroup({
  reporter: new FormControl(null, Validators.required), //string
  shift: new FormControl(null, Validators.required), //string
  crew: new FormControl(null, Validators.required), //string
  incidents: new FormControl(null, Validators.required), //number
  incidentDesc: new FormControl(null), //string
  shiftDesc: new FormControl(null, Validators.required), //string
  p1a: new FormControl(null, Validators.required),
  p1b: new FormControl(null, Validators.required),
  p1c: new FormControl(null, Validators.required),
  p1d: new FormControl(null, Validators.required),
  p1e: new FormControl(null, Validators.required),
  p2a: new FormControl(null, Validators.required),
  p2b: new FormControl(null, Validators.required),
  p2c: new FormControl(null, Validators.required),
  p2d: new FormControl(null, Validators.required),
  p2e: new FormControl(null, Validators.required),
  p3a: new FormControl(null, Validators.required),
  p3b: new FormControl(null, Validators.required),
  p3c: new FormControl(null, Validators.required),
  p3d: new FormControl(null, Validators.required),
  p3e: new FormControl(null, Validators.required),
  p4a: new FormControl(null, Validators.required),
  p4b: new FormControl(null, Validators.required),
  p4c: new FormControl(null, Validators.required),
  p4d: new FormControl(null, Validators.required),
  p4e: new FormControl(null, Validators.required),
  p5a: new FormControl(null, Validators.required),
  p5b: new FormControl(null, Validators.required),
  p5c: new FormControl(null, Validators.required),
  p5d: new FormControl(null, Validators.required),
  p5e: new FormControl(null, Validators.required),
  p6a: new FormControl(null, Validators.required),
  p6b: new FormControl(null, Validators.required),
  p6c: new FormControl(null, Validators.required),
  p6d: new FormControl(null, Validators.required),
  p6e: new FormControl(null, Validators.required),
  p7a: new FormControl(null, Validators.required),
  p7b: new FormControl(null, Validators.required),
  p7c: new FormControl(null, Validators.required),
  p7d: new FormControl(null, Validators.required),
  p7e: new FormControl(null, Validators.required),
  p8a: new FormControl(null, Validators.required),
  p8b: new FormControl(null, Validators.required),
  p8c: new FormControl(null, Validators.required),
  p8d: new FormControl(null, Validators.required),
  p8e: new FormControl(null, Validators.required),
  p9a: new FormControl(null, Validators.required),
  p9b: new FormControl(null, Validators.required),
  p9c: new FormControl(null, Validators.required),
  p9d: new FormControl(null, Validators.required),
  p9e: new FormControl(null, Validators.required),
  so01_1: new FormControl(null, Validators.required),
  so01_2: new FormControl(null, Validators.required),
  so01_3: new FormControl(null, Validators.required),
  so01_4: new FormControl(null, Validators.required),
  so01_5: new FormControl(null, Validators.required),
  so01_6: new FormControl(null, Validators.required),
  so01_7: new FormControl(null, Validators.required),
  so01_8: new FormControl(null, Validators.required),
  so01_9: new FormControl(null, Validators.required),
  so01_10: new FormControl(null, Validators.required),
  pr04_1: new FormControl(null, Validators.required),
  pr04_2: new FormControl(null, Validators.required),
  pr04_3: new FormControl(null, Validators.required),
  misc_1: new FormControl(null, Validators.required),
  misc_2: new FormControl(null, Validators.required),
  misc_3: new FormControl(null, Validators.required),
  misc_4: new FormControl(null, Validators.required),
  misc_5: new FormControl(null, Validators.required),
  misc_6: new FormControl(null, Validators.required),
  blockedEquip: new FormControl(null, Validators.required)
  });


//--------------------------------Data Array--------------------------------
  dataArray: number[] = [];
  createDataArray() {
    this.dataArray = [
      this.datasheetForm.value.p1a,
      this.datasheetForm.value.p1b,
      this.datasheetForm.value.p1c,
      this.datasheetForm.value.p1d,
      this.datasheetForm.value.p1e,
      this.datasheetForm.value.p2a,
      this.datasheetForm.value.p2b,
      this.datasheetForm.value.p2c,
      this.datasheetForm.value.p2d,
      this.datasheetForm.value.p2e,
      this.datasheetForm.value.p3a,
      this.datasheetForm.value.p3b,
      this.datasheetForm.value.p3c,
      this.datasheetForm.value.p3d,
      this.datasheetForm.value.p3e,
      this.datasheetForm.value.p4a,
      this.datasheetForm.value.p4b,
      this.datasheetForm.value.p4c,
      this.datasheetForm.value.p4d,
      this.datasheetForm.value.p4e,
      this.datasheetForm.value.p5a,
      this.datasheetForm.value.p5b,
      this.datasheetForm.value.p5c,
      this.datasheetForm.value.p5d,
      this.datasheetForm.value.p5e,
      this.datasheetForm.value.p6a,
      this.datasheetForm.value.p6b,
      this.datasheetForm.value.p6c,
      this.datasheetForm.value.p6d,
      this.datasheetForm.value.p6e,
      this.datasheetForm.value.p7a,
      this.datasheetForm.value.p7b,
      this.datasheetForm.value.p7c,
      this.datasheetForm.value.p7d,
      this.datasheetForm.value.p7e,
      this.datasheetForm.value.p8a,
      this.datasheetForm.value.p8b,
      this.datasheetForm.value.p8c,
      this.datasheetForm.value.p8d,
      this.datasheetForm.value.p8e,
      this.datasheetForm.value.p9a,
      this.datasheetForm.value.p9b,
      this.datasheetForm.value.p9c,
      this.datasheetForm.value.p9d,
      this.datasheetForm.value.p9e,
      this.datasheetForm.value.so01_1,
      this.datasheetForm.value.so01_2,
      this.datasheetForm.value.so01_3,
      this.datasheetForm.value.so01_4,
      this.datasheetForm.value.so01_5,
      this.datasheetForm.value.so01_6,
      this.datasheetForm.value.so01_7,
      this.datasheetForm.value.so01_8,
      this.datasheetForm.value.so01_9,
      this.datasheetForm.value.so01_10,
      this.datasheetForm.value.pr04_1,
      this.datasheetForm.value.pr04_2,
      this.datasheetForm.value.pr04_3,
      this.datasheetForm.value.misc_1,
      this.datasheetForm.value.misc_2,
      this.datasheetForm.value.misc_3,
      this.datasheetForm.value.misc_4,
      this.datasheetForm.value.misc_5,
      this.datasheetForm.value.misc_6,
      this.datasheetForm.value.blockedEquip,
      ]
  }

//--------------------------------Math()--------------------------------

  //so01_5 = average of p*a
  //so01_6 = sum of p*a
  //so01_7 = average of p*b
  //so01_8 = sum of p*b
  
  //declare the math values
  so01_5Math: number = 0;
  so01_6Math: number = 0;
  so01_7Math: number = 0;
  so01_8Math: number = 0;
  pr04_1Math: number = 0;

  math() {
    // so01_5 math
    const so01_5Sum: number =  
      this.datasheetForm.value.p1a +
      this.datasheetForm.value.p2a +
      this.datasheetForm.value.p3a +
      this.datasheetForm.value.p4a +
      this.datasheetForm.value.p5a +
      this.datasheetForm.value.p6a +
      this.datasheetForm.value.p7a +
      this.datasheetForm.value.p8a +
      this.datasheetForm.value.p9a;

    this.so01_5Math = Math.round(so01_5Sum / 9);

    // so01_6 math
    this.so01_6Math = Math.round(so01_5Sum);

    // so01_7 math
    const so01_7Sum: number =  
      this.datasheetForm.value.p1b +
      this.datasheetForm.value.p2b +
      this.datasheetForm.value.p3b +
      this.datasheetForm.value.p4b +
      this.datasheetForm.value.p5b +
      this.datasheetForm.value.p6b +
      this.datasheetForm.value.p7b +
      this.datasheetForm.value.p8b +
      this.datasheetForm.value.p9b;

    this.so01_7Math = Math.round(so01_7Sum / 9);

    // so01_8 math
    this.so01_8Math = Math.round(so01_7Sum);  

    // pr04_3 math
    const pr04_1Working:number = this.datasheetForm.value.pr04_1 / 60;
    this.pr04_1Math = +pr04_1Working.toFixed(2);
  }



//--------------------------------onSubmit()--------------------------------
  onSubmit() {
    //button command

    this.createDataArray();
    if (this.datasheetForm.valid) {

      this.csvService.prepareCSV(

        // Collect values from the form controls
        // the ?? means if the value given from the field is null, the value in the '' is used.
        this.currentDateString,
        this.datasheetForm.value.shift ?? '',
        this.datasheetForm.value.crew ?? '',
        this.datasheetForm.value.reporter ?? '',
        this.datasheetForm.value.incidents ?? 0,
        this.datasheetForm.value.incidentDesc ?? '',
        this.datasheetForm.value.shiftDesc ?? '',
        this.dataArray ?? ''

        );

      this.emailReportService.sendEmail(

        this.currentDateString,
        this.datasheetForm.value.shift ?? '',
        this.datasheetForm.value.crew ?? ''
        ).subscribe(
          response => {
            console.log('Email Sent Successfully');
          },
          error => {
            console.log('Error Sending Email', error);
          }
        );

    }
  
  }



//--------------------------------postReport()--------------------------------

  // postReport() {
  //   //button command

  //   this.createDataArray();
  //   if (this.datasheetForm.valid) {

  //     this.reportService.postReport(
  //       // Collect values from the form controls
  //       // the ?? means if the value given from the field is null, the value in the '' is used.
  //       this.currentDateString,
  //       this.datasheetForm.value.shift ?? '',
  //       this.datasheetForm.value.crew ?? '',
  //       this.datasheetForm.value.reporter ?? '',
  //       this.datasheetForm.value.incidents ?? 0
  //       );

  //   }
  // }





}