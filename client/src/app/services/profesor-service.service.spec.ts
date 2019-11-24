import { TestBed } from '@angular/core/testing';

import { ProfesorServiceService } from './profesor-service.service';

describe('ProfesorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesorServiceService = TestBed.get(ProfesorServiceService);
    expect(service).toBeTruthy();
  });
});
