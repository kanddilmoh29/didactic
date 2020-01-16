import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule
} from '@angular/material';


const modules: any[] = [
    MatButtonModule
  , MatAutocompleteModule
  , MatFormFieldModule
  , MatInputModule
  , MatCardModule

];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class MaterialModule { }
