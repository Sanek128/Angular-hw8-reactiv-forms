import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-hw8-reactiv-forms';

  form: FormGroup;
  select: FormControl = new FormControl (1, Validators.required);

  user: User[];
  userList: User[];

  constructor(private userService:UserService,
              private router: Router
  ) {}

  submitform(form: FormGroup): void {
    let userId = form.controls.id.value;
    this.router.navigate([userId]);
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => {
      this.userList = value;
    })

    this.form = new FormGroup({
      id: this.select
    })

  }

}
