import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [CommonModule, MatButtonToggleModule, MatCardModule, MatTabsModule],
  declarations: [CategoriesComponent],
  providers: [],
  exports: [CategoriesComponent]
})
export class CategoriesComponentModule {
}
