import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = new User()
  readonly URL_API = 'http://127.0.0.1:5000/api/users';
  users: User[]

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(this.URL_API);
  }

  getUser(name: string){
    return this.httpClient.get(this.URL_API)
  }

  createUser(user: User) {
    return this.httpClient.post(this.URL_API, user);
  }

  updateUser(user: User) {
    return this.httpClient.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string) {
    return this.httpClient.delete(this.URL_API + `/${_id}`);
  }
}
