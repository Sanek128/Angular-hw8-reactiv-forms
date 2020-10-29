import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input()
  userList: User[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService
    ) { }

    getPosts (id: number): void {
      this.router.navigate(['posts', id], {
        relativeTo: this.activatedRoute,
        state: {userId: id}
      })
    }
    
    ngOnInit(): void {
      this.activatedRoute.params.subscribe(value => {
        this.userService.getAllUsers().subscribe (val => {
          let userFiltered = this.userService.userFiltered (val, +value.id);
          this.userList = userFiltered;
        })
      })
    }
  }
  