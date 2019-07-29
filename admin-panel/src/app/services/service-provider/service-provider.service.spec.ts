import { TestBed } from '@angular/core/testing';

import { ServiceProviderService } from './service-provider.service';

describe('ServiceProviderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceProviderService = TestBed.get(ServiceProviderService);
    expect(service).toBeTruthy();
  });
});
