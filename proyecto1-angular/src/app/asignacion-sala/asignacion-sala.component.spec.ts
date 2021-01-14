import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSalaComponent } from './asignacion-sala.component';

describe('AsignacionSalaComponent', () => {
  let component: AsignacionSalaComponent;
  let fixture: ComponentFixture<AsignacionSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
