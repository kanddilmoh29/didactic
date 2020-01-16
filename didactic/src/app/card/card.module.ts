import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [CardComponent],
  imports: [
      CommonModule
    , MaterialModule
  ]
})
export class CardModule { }
