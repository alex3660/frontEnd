import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICursoComponent } from './i-curso.component';

describe('ICursoComponent', () => {
  let component: ICursoComponent;
  let fixture: ComponentFixture<ICursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ICursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ICursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
