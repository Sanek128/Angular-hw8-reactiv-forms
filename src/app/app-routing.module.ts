import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPostComponent } from './entity/post/all-post/all-post.component';
import { UserComponent } from './entity/user/user.component';

const routes: Routes = [
  {
    path: ':id', component: UserComponent, children:
    [{
      path: 'posts/:id', component: AllPostComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
