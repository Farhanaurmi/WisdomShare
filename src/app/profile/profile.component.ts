import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  posts: any = [];
  constructor(private postService: PostService, private store: Store<{user:{user:any}}>) { }

  ngOnInit(): void {
    this.store.select('user').subscribe((data)=>{
      this.userData = data.user;
    })
    console.log(this.userData,"muju")
    this.postService.getPosts().subscribe(
      (response: any) => {
        this.posts = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  
}
