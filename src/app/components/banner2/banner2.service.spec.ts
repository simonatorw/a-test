import { TestBed, inject } from '@angular/core/testing';

import { Banner2Service } from './banner2.service';

describe('Banner2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Banner2Service]
    });
  });

  it('should be created', inject([Banner2Service], (service: Banner2Service) => {
    expect(service).toBeTruthy();
  }));
  
	it('should return correct value', () => {
		const service = new Banner2Service;
		
		expect(service.getTitle()).toEqual('foobar');
	});
});
