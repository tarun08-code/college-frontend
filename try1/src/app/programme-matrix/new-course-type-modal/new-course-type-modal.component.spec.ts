import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseTypeModalComponent } from './new-course-type-modal.component';

describe('NewCourseTypeModalComponent', () => {
  let component: NewCourseTypeModalComponent;
  let fixture: ComponentFixture<NewCourseTypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCourseTypeModalComponent]
    });
    fixture = TestBed.createComponent(NewCourseTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
