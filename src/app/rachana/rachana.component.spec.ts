import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RachanaComponent } from './rachana.component';

describe('RachanaComponent', () => {
  let component: RachanaComponent;
  let fixture: ComponentFixture<RachanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RachanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RachanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
