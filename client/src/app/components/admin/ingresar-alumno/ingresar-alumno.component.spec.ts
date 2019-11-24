import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarAlumnoComponent } from './ingresar-alumno.component';

describe('IngresarAlumnoComponent', () => {
  let component: IngresarAlumnoComponent;
  let fixture: ComponentFixture<IngresarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
