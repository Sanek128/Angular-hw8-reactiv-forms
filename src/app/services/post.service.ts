import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) { }

  getAllPosts(id: number): Observable <Post[]> {
    return this.httpClient.get <Post[]> (`${this.URL}${id}`);
  }

  // getAllPosts(id: number): Observable <Post[]> {
  //   return this.http.get <Post[]> (`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  // }
}

