import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAlumnoComponent } from './i-alumno.component';

describe('IAlumnoComponent', () => {
  let component: IAlumnoComponent;
  let fixture: ComponentFixture<IAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
