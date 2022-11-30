import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {FormComponent} from './components/form/form.component';
import {HomeComponent} from './components/home/home.component';
import {UsersComponentModule} from './components/users/users.component-module';
import {UsersServiceModule} from './services/users.service-module';
import {FormComponentModule} from './components/form/form.component-module';
import {HomeComponentModule} from './components/home/home.component-module';

const routes: Routes = [
  {path: 'users', component: UsersComponent}, {
    path: 'userform',
    component: FormComponent
  }, {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersComponentModule, UsersServiceModule, FormComponentModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
