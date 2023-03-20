import { TestBed } from '@angular/core/testing';

import { DialogBodyService } from './dialog-body.service';

describe('DialogBodyService', () => {
  let service: DialogBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
