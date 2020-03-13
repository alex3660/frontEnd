import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrontasenaComponent } from './crontasena.component';

describe('CrontasenaComponent', () => {
  let component: CrontasenaComponent;
  let fixture: ComponentFixture<CrontasenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrontasenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrontasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
