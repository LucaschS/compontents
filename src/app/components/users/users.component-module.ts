import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './users.component';
import {RouterOutlet} from "@angular/router";

@NgModule({
    imports: [MatListModule, CommonModule, RouterOutlet],
  declarations: [UsersComponent],
  providers: [],
  exports: [UsersComponent]
})
export class UsersComponentModule {
}
