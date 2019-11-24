import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCComponent } from './editar-c.component';

describe('EditarCComponent', () => {
  let component: EditarCComponent;
  let fixture: ComponentFixture<EditarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
