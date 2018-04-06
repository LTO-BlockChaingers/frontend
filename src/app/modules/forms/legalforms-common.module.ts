import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule
} from '@angular/material';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatFormFieldModule
];
@NgModule({
  imports: modules,
  exports: modules
})
export class LegalformsCommonModule {}
