import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignActivityComponent } from './asign-activity.component';

describe('AsignActivityComponent', () => {
  let component: AsignActivityComponent;
  let fixture: ComponentFixture<AsignActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignActivityComponent]
    });
    fixture = TestBed.createComponent(AsignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
