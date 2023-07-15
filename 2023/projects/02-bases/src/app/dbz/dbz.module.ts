import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPegeComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    MainPegeComponent
  ],
  exports: [
    MainPegeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
