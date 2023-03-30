import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserreqReceiptComponent } from './userreq-receipt.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserreqReceiptComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserreqReceiptComponent
  ]
})
export class UserreqReceiptModule { }
