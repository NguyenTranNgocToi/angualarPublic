import { TestBed } from '@angular/core/testing';

import { ServerHttpsService } from './server-https.service';

describe('ServerHttpsService', () => {
  let service: ServerHttpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerHttpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
