import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  static createPost(post: { visibility: any; backgroundColor: any; textContent: any; image: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  createPost(post: any) {
    console.log(post,"hsh")
    return this.http.post('http://localhost:3000/posts', post);
  }
  getPosts() {
    return this.http.get('http://localhost:3000/posts');
  }
}
