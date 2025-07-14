import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupngModalComponent } from './ungroupng-modal.component';

describe('UngroupngModalComponent', () => {
  let component: UngroupngModalComponent;
  let fixture: ComponentFixture<UngroupngModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UngroupngModalComponent]
    });
    fixture = TestBed.createComponent(UngroupngModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
