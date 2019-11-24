import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMateriaComponent } from './i-materia.component';

describe('IMateriaComponent', () => {
  let component: IMateriaComponent;
  let fixture: ComponentFixture<IMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
