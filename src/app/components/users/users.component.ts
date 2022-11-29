import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  readonly list$: Observable<UsersModel[]> = this._usersService.getAll();

  constructor(private _usersService: UsersService) {
  }

}
