import { TestBed } from '@angular/core/testing';

import { EventserviceService } from './studentservice.service';

describe('EventserviceService', () => {
  let service: EventserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
