import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpingPopUpComponent } from './grping-pop-up.component';

describe('GrpingPopUpComponent', () => {
  let component: GrpingPopUpComponent;
  let fixture: ComponentFixture<GrpingPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrpingPopUpComponent]
    });
    fixture = TestBed.createComponent(GrpingPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
