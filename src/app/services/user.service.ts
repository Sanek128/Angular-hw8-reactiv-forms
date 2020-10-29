import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable <User[]> {
    return this.httpClient.get <User[]> (`${this.URL}`);
  }

  userFiltered(users: User[], id: number): User[]{
    return users.filter(user => user.id === id)
  }

  getOneUserFromId(id: number): Observable <User> {
    // return this.http.get <User> ('https://jsonplaceholder.typicode.com/users/${id}');
    return this.httpClient.get <User> (`http://jsonplaceholder.typicode.com/users/${id}`);
  }
}
