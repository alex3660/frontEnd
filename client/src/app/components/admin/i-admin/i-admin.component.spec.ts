import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAdminComponent } from './i-admin.component';

describe('IAdminComponent', () => {
  let component: IAdminComponent;
  let fixture: ComponentFixture<IAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
