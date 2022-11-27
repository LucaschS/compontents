import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesComponentModule} from './components/categories/categories.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'categories',
    component: CategoriesComponent
  }]), CategoriesComponentModule, CategoriesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
