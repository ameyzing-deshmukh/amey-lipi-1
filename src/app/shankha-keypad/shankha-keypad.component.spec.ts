import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShankhaKeypadComponent } from './shankha-keypad.component';

describe('ShankhaKeypadComponent', () => {
  let component: ShankhaKeypadComponent;
  let fixture: ComponentFixture<ShankhaKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShankhaKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShankhaKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
