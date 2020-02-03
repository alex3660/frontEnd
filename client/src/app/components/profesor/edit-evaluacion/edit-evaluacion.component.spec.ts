import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvaluacionComponent } from './edit-evaluacion.component';

describe('EditEvaluacionComponent', () => {
  let component: EditEvaluacionComponent;
  let fixture: ComponentFixture<EditEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
