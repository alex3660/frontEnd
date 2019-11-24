import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarMateriaComponent } from './ingresar-materia.component';

describe('IngresarMateriaComponent', () => {
  let component: IngresarMateriaComponent;
  let fixture: ComponentFixture<IngresarMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
