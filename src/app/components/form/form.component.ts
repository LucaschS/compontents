import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  readonly usersForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl()
  });

  onUsersFormSubmitted(usersForm: FormGroup): void {
  }
}
