import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogEmpleadoComponent } from './log-empleado.component';

describe('LogEmpleadoComponent', () => {
  let component: LogEmpleadoComponent;
  let fixture: ComponentFixture<LogEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
