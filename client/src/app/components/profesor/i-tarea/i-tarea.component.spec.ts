import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITareaComponent } from './i-tarea.component';

describe('ITareaComponent', () => {
  let component: ITareaComponent;
  let fixture: ComponentFixture<ITareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
