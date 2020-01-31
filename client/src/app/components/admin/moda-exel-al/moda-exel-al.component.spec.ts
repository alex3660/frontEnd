import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaExelAlComponent } from './moda-exel-al.component';

describe('ModaExelAlComponent', () => {
  let component: ModaExelAlComponent;
  let fixture: ComponentFixture<ModaExelAlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaExelAlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaExelAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
