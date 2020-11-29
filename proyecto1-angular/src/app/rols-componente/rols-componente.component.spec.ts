import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolsComponenteComponent } from './rols-componente.component';

describe('RolsComponenteComponent', () => {
  let component: RolsComponenteComponent;
  let fixture: ComponentFixture<RolsComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolsComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolsComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
