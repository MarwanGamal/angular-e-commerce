import { TestBed } from '@angular/core/testing';

import { TopSellersApi } from './top-sellers-api';

describe('TopSellersApi', () => {
  let service: TopSellersApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopSellersApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
