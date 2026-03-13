import { TestBed } from '@angular/core/testing';

import { NewArrivalApi } from './new-arrival-api';

describe('NewArrivalApi', () => {
  let service: NewArrivalApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewArrivalApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
