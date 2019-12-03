import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeForoComponent } from './mensaje-foro.component';

describe('MensajeForoComponent', () => {
  let component: MensajeForoComponent;
  let fixture: ComponentFixture<MensajeForoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeForoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeForoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
