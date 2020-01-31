import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaLCursoprofesorComponent } from './moda-l-cursoprofesor.component';

describe('ModaLCursoprofesorComponent', () => {
  let component: ModaLCursoprofesorComponent;
  let fixture: ComponentFixture<ModaLCursoprofesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaLCursoprofesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaLCursoprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
