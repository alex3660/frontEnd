import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavegarComponent } from './admin-navegar.component';

describe('AdminNavegarComponent', () => {
  let component: AdminNavegarComponent;
  let fixture: ComponentFixture<AdminNavegarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNavegarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
