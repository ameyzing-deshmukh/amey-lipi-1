import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakPracticeHomeComponent } from './anak-practice-home.component';

describe('AnakPracticeHomeComponent', () => {
  let component: AnakPracticeHomeComponent;
  let fixture: ComponentFixture<AnakPracticeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakPracticeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakPracticeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
