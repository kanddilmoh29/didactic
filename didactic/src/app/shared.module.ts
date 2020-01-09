import { ScrollMenuComponent } from './scroll-menu/scroll-menu.component';
import { ScrollMenuModule } from './scroll-menu/scroll-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ScrollMenuComponent],
  imports: [
    CommonModule,
    ScrollMenuModule
  ]
})
export class SharedModule { }
