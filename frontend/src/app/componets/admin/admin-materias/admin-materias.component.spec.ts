import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMateriasComponent } from './admin-materias.component';

describe('AdminMateriasComponent', () => {
  let component: AdminMateriasComponent;
  let fixture: ComponentFixture<AdminMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
