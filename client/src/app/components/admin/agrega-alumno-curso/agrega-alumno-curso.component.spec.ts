import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaAlumnoCursoComponent } from './agrega-alumno-curso.component';

describe('AgregaAlumnoCursoComponent', () => {
  let component: AgregaAlumnoCursoComponent;
  let fixture: ComponentFixture<AgregaAlumnoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaAlumnoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaAlumnoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
