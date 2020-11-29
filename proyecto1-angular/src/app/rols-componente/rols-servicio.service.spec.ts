import { TestBed } from '@angular/core/testing';

import { RolsServicioService } from './rols-servicio.service';

describe('RolsServicioService', () => {
  let service: RolsServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolsServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
