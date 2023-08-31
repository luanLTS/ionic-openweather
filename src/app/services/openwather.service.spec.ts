import { TestBed } from '@angular/core/testing';

import { OpenwatherService } from './openwather.service';

describe('OpenwatherService', () => {
  let service: OpenwatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenwatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
