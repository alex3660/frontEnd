import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITalleresComponent } from './i-talleres.component';

describe('ITalleresComponent', () => {
  let component: ITalleresComponent;
  let fixture: ComponentFixture<ITalleresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITalleresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
