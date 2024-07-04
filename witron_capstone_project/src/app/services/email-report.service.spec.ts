import { TestBed } from '@angular/core/testing';

import { EmailReportService } from './email-report.service';

describe('EmailReportService', () => {
  let service: EmailReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
