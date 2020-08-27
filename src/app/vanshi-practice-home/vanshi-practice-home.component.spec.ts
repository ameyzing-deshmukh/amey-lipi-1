import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanshiPracticeHomeComponent } from './vanshi-practice-home.component';

describe('VanshiPracticeHomeComponent', () => {
  let component: VanshiPracticeHomeComponent;
  let fixture: ComponentFixture<VanshiPracticeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanshiPracticeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanshiPracticeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
