import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  posts: any = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(this.posts,"hs33h")
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  

}
