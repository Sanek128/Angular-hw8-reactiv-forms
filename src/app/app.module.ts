import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './entity/user/user.component';
import { PostComponent } from './entity/post/post/post.component';
import { AllPostComponent } from './entity/post/all-post/all-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    AllPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
