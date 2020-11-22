import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNotificacionSalasComponent } from './panel-notificacion-salas.component';

describe('PanelNotificacionSalasComponent', () => {
  let component: PanelNotificacionSalasComponent;
  let fixture: ComponentFixture<PanelNotificacionSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNotificacionSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNotificacionSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
