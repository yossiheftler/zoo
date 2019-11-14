import { TestBed } from '@angular/core/testing';

import { WildService } from './wild.service';

describe('WildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildService = TestBed.get(WildService);
    expect(service).toBeTruthy();
  });
});
