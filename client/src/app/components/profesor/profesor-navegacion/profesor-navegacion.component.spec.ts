import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorNavegacionComponent } from './profesor-navegacion.component';

describe('ProfesorNavegacionComponent', () => {
  let component: ProfesorNavegacionComponent;
  let fixture: ComponentFixture<ProfesorNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
