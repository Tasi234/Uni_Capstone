







import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailReportService {

  private emailUrl = 'http://localhost:3000/send-email';

  constructor(private http: HttpClient) { };

  sendEmail(
    reportDate: string,
    shift: string, 
    crew: string
    ) {
      const data = {
        reportDate: reportDate,
        shift: shift, 
        crew: crew        
      };

    return this.http.post(this.emailUrl, data);
  }
}
