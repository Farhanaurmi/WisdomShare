import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './post/create-post/create-post.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent },
  { path: 'create-post', component: CreatePostComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PostComponent,
    HomeComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
