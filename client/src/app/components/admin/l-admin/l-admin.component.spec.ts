import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LAdminComponent } from './l-admin.component';

describe('LAdminComponent', () => {
  let component: LAdminComponent;
  let fixture: ComponentFixture<LAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
