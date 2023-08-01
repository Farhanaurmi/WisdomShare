import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { Store, select } from '@ngrx/store';
import { AppState } from './store/app.state';
import { googleLogin, googleLogout } from './store/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  loggedIn: boolean = false;
  isNavbarCollapsed = true;
  userData: any;

  constructor(private authService: SocialAuthService, private store: Store<{user:{user:any}}>) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
     
      if (this.user) {
        this.store.dispatch(googleLogin({ user: this.user }));
      }
      else {
        this.store.dispatch(googleLogout());
      }

    });
    this.store.select('user').subscribe((data)=>{
      this.userData = data.user;
    })
    console.log(this.userData,"muju1")
   }

  ngOnInit() {
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
     
      if (this.user) {
        this.store.dispatch(googleLogin({ user: this.user }));
      }
      else {
        this.store.dispatch(googleLogout());
      }

    });
    this.store.select('user').subscribe((data)=>{
      this.userData = data.user;
    })
    console.log(this.userData,"muju1")
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  logout(): void {
    this.authService.signOut();
  }

}
