import { CardModule } from './../../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkComponent } from './cdk.component';



@NgModule({
  declarations: [CdkComponent],
  imports: [
      CommonModule
    , CardModule
  ]
})
export class CdkModule { }
