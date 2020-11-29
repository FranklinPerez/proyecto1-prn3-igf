import { TestBed } from '@angular/core/testing';

import { LogEmpleadoService } from './log-empleado.service';

describe('LogEmpleadoService', () => {
  let service: LogEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
