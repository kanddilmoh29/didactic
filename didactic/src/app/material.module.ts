import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';


const modules: any[] = [
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule

];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class MaterialModule { }
