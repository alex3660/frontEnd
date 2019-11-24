import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarProfesorComponent } from './ingresar-profesor.component';

describe('IngresarProfesorComponent', () => {
  let component: IngresarProfesorComponent;
  let fixture: ComponentFixture<IngresarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
