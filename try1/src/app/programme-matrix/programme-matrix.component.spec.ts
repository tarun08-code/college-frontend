import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeMatrixComponent } from './programme-matrix.component';

describe('ProgrammeMatrixComponent', () => {
  let component: ProgrammeMatrixComponent;
  let fixture: ComponentFixture<ProgrammeMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeMatrixComponent]
    });
    fixture = TestBed.createComponent(ProgrammeMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
