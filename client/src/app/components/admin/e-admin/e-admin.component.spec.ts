import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAdminComponent } from './e-admin.component';

describe('EAdminComponent', () => {
  let component: EAdminComponent;
  let fixture: ComponentFixture<EAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
