import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AalumnoIndividualCursoComponent } from './aalumno-individual-curso.component';

describe('AalumnoIndividualCursoComponent', () => {
  let component: AalumnoIndividualCursoComponent;
  let fixture: ComponentFixture<AalumnoIndividualCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AalumnoIndividualCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AalumnoIndividualCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
