import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './convert-to-space.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacesPipe
  ],
  //define what an importing module can use
  exports: [
    StarComponent,
    ConvertToSpacesPipe,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }