import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IProfesorComponent } from './i-profesor.component';

describe('IProfesorComponent', () => {
  let component: IProfesorComponent;
  let fixture: ComponentFixture<IProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
