/*
Tasi Theodorou 23874961
ISYS3008 
Witron Capstone Project 
SCU Summer Term 2024 
This file was entirely compiled by Tasi. 
**Remains functionally unchanged from Sprint 1**
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CSVService {
  prepareCSV(
    date:string,
    shift:string, 
    crew:string,
    reporter:string, 
    incidents:number,
    incidentDesc:string, 
    shiftDesc:string, 
    dataArray:number[]
    ) {

      //CSV HEADER
      const header = [
        'day',
        'date',
        'shift',
        'crew', 
        'reporter', 
        'incidents',
        'incidentDesc', 
        'shiftDesc',
        'p1a',
        'p1b',
        'p1c',
        'p1d',
        'p1e',
        'p2a',
        'p2b',
        'p2c',
        'p2d',
        'p2e',
        'p3a',
        'p3b',
        'p3c',
        'p3d',
        'p3e',
        'p4a',
        'p4b',
        'p4c',
        'p4d',
        'p4e',
        'p5a',
        'p5b',
        'p5c',
        'p5d',
        'p5e',
        'p6a',
        'p6b',
        'p6c',
        'p6d',
        'p6e',
        'p7a',
        'p7b',
        'p7c',
        'p7d',
        'p7e',
        'p8a',
        'p8b',
        'p8c',
        'p8d',
        'p8e',
        'p9a',
        'p9b',
        'p9c',
        'p9d',
        'p9e',
        'so01_1',
        'so01_2',
        'so01_3',
        'so01_4',
        'so01_5',
        'so01_6',
        'so01_7',
        'so01_8',
        'so01_9',
        'so01_10',
        'pr04_1',
        'pr04_2',
        'pr04_3',
        'misc_1',
        'misc_2',
        'misc_3',
        'misc_4',
        'misc_5',
        'misc_6',
        'blockedEquip'
        ];

      //CSV CONTENTS 1
      let csvContents1:string [] = [
        date,
        shift,
        crew,
        reporter,
        incidents.toString(),
        incidentDesc,
        shiftDesc,
        ];

      //CSV STRING CREATION
      const csvHeaderString:string = header.join(',');
      const csvContents1String:string = csvContents1.join(',');
      const csvContents2String:string = dataArray.join(',');
      
      const csvComplete:string = 
        csvHeaderString 
        + '\n'
        + csvContents1String
        + ','
        + csvContents2String;

      this.generateCSV(csvComplete);
    }


  generateCSV(csvComplete:string){
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvComplete);
    hiddenElement.target = '_blank';
    hiddenElement.download = name + '.csv';
    hiddenElement.click();
  }
}

//This website tutorial was used to inspire the logic for the CSV creation. 
//https://code.tutsplus.com/how-to-upload-and-download-csv-files-with-angularjs--cms-31489t