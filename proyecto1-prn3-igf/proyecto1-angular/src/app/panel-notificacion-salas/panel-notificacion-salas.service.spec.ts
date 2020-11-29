import { TestBed } from '@angular/core/testing';

import { PanelNotificacionSalasService } from './panel-notificacion-salas.service';

describe('PanelNotificacionSalasService', () => {
  let service: PanelNotificacionSalasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelNotificacionSalasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
