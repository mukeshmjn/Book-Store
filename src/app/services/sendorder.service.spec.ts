import { TestBed } from '@angular/core/testing';

import { SendorderService } from './sendorder.service';

describe('SendorderService', () => {
  let service: SendorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
