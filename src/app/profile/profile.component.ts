import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any; // Replace 'any' with the actual type of your user data

  constructor() {}

  ngOnInit(): void {
    this.getUserDataFromLocalStorage();
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
