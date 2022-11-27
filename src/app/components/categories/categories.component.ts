import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesService } from '../../services/categories.service';
import {CategoriesModel} from "../../models/categories.model";

@Component({
  selector: 'app-categories',
  styleUrls: ['./categories.component.scss'],
  templateUrl: './categories.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  readonly data$: Observable<CategoriesModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
