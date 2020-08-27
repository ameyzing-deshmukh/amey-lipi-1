import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakKeypadComponent } from './anak-keypad.component';

describe('AnakKeypadComponent', () => {
  let component: AnakKeypadComponent;
  let fixture: ComponentFixture<AnakKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
