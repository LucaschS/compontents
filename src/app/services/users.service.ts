import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {UsersModel} from '../models/users.model';
import {CreateUserModel} from "../models/create-user.model";

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UsersModel[]> {
    return this._httpClient.get<UsersModel[]>('https://fakestoreapi.com/users');
  }

  createUser(index: Omit<UsersModel, 'id' | 'password' | 'name' | 'address' | 'phone'>): Observable<UsersModel> {
    return this._httpClient.post<UsersModel>('https://fakestoreapi.com/users', index)
      // .pipe(map(_=> void 0))
  }
}

