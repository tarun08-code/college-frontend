import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgrammeMatrixComponent } from './programme-matrix/programme-matrix.component';
import { NewBatchModelComponent } from './programme-matrix/new-batch-model/new-batch-model.component';
import { NewCourseTypeModalComponent } from './programme-matrix/new-course-type-modal/new-course-type-modal.component';
import { GrpingPopUpComponent } from './programme-matrix/grping-pop-up/grping-pop-up.component';
import { UngroupngModalComponent } from './programme-matrix/ungroupng-modal/ungroupng-modal.component';
import { DeletePopupComponent } from './programme-matrix/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeMatrixComponent,
    NewBatchModelComponent,
    NewCourseTypeModalComponent,
    GrpingPopUpComponent,
    UngroupngModalComponent,
    DeletePopupComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
