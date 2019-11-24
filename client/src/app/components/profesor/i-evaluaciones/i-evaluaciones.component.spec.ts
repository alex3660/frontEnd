import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEvaluacionesComponent } from './i-evaluaciones.component';

describe('IEvaluacionesComponent', () => {
  let component: IEvaluacionesComponent;
  let fixture: ComponentFixture<IEvaluacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEvaluacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
