import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import {UsersModel} from "../../models/users.model";
import {CreateUserModel} from "../../models/create-user.model";

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  readonly usersForm: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl()
  });

  constructor(private _usersService: UsersService) {
  };

  onUsersFormSubmitted(usersForm: UsersModel): void {
    this._usersService.createUser({username: usersForm.username, email: usersForm.email})
  };

  // onUsersFormSubmitted(usersForm: FormGroup): void {
  //   this._usersService.createUser({
  //     firstname: usersForm.get('firstname')?.value,
  //     lastname: usersForm.get('lastname')?.value,
  //   }).subscribe();
  // }
}
