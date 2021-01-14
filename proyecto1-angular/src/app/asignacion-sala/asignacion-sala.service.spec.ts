import { TestBed } from '@angular/core/testing';

import { AsignacionSalaService } from './asignacion-sala.service';

describe('AsignacionSalaService', () => {
  let service: AsignacionSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
