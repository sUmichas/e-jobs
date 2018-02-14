import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { User } from '../user';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(
  	private userService: RegisterService
  	) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void{
  	this.userService.getUsers()
  		.subscribe(users => this.users = users);
  }
}
