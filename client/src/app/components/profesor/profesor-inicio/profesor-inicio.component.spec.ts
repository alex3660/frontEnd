import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorInicioComponent } from './profesor-inicio.component';

describe('ProfesorInicioComponent', () => {
  let component: ProfesorInicioComponent;
  let fixture: ComponentFixture<ProfesorInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
