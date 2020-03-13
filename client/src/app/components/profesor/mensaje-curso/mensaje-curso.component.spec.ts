import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeCursoComponent } from './mensaje-curso.component';

describe('MensajeCursoComponent', () => {
  let component: MensajeCursoComponent;
  let fixture: ComponentFixture<MensajeCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
