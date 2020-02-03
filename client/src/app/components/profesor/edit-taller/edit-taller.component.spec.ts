import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTallerComponent } from './edit-taller.component';

describe('EditTallerComponent', () => {
  let component: EditTallerComponent;
  let fixture: ComponentFixture<EditTallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
