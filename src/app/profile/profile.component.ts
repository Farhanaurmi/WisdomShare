import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any; // Replace 'any' with the actual type of your user data
  posts: any = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getUserDataFromLocalStorage();
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

  getUserDataFromLocalStorage(): void {
    const userDataString = localStorage.getItem('userData'); // Assuming the user data is stored with the key 'userData'
    if (userDataString) {
      this.userData = JSON.parse(userDataString);
    } else {
      // Handle the case when user data is not found in local storage
      // For example, redirect to login or display an error message
    }
  }
}
