import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  loggedIn: boolean = false;
  //fetch user data from local storage
  

  constructor(private authService: SocialAuthService) {
    console.log(this.loggedIn)
   }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem('user', JSON.stringify(this.user));
      
    });
  }
  logout(): void {
    this.authService.signOut();
    localStorage.removeItem('user');
  }

}
