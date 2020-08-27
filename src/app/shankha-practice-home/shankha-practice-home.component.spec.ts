import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShankhaPracticeHomeComponent } from './shankha-practice-home.component';

describe('ShankhaPracticeHomeComponent', () => {
  let component: ShankhaPracticeHomeComponent;
  let fixture: ComponentFixture<ShankhaPracticeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShankhaPracticeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShankhaPracticeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
