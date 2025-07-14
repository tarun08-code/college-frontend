import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBatchModelComponent } from './new-batch-model.component';

describe('NewBatchModelComponent', () => {
  let component: NewBatchModelComponent;
  let fixture: ComponentFixture<NewBatchModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBatchModelComponent]
    });
    fixture = TestBed.createComponent(NewBatchModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
