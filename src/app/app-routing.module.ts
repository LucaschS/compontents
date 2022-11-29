import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {FormComponent} from './components/form/form.component';
import {UsersComponentModule} from './components/users/users.component-module';
import {UsersServiceModule} from './services/users.service-module';
import {FormComponentModule} from './components/form/form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'users', component: UsersComponent}, {
    path: 'userform',
    component: FormComponent
  }]), UsersComponentModule, UsersServiceModule, FormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
