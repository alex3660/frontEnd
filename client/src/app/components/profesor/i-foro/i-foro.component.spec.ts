import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IForoComponent } from './i-foro.component';

describe('IForoComponent', () => {
  let component: IForoComponent;
  let fixture: ComponentFixture<IForoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IForoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
