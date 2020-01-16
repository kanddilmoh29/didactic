import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { TslintComponent } from './tslint/tslint.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    AngularComponent,
    ReactComponent,
    TslintComponent,
    JavascriptComponent,
    TypescriptComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DidacticModule { }
