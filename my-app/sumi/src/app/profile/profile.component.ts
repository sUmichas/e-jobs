import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';


import { RegisterService } from '../register.service';

import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  @Input()
  user:User;
  isUser:boolean = false;
  id: number;
  template = this.template;

  modalRef: BsModalRef;
  

  constructor(
  	private route: ActivatedRoute,
  	private userService: RegisterService,
  	private location: Location,
    private modalService: BsModalService
  	) { }

  ngOnInit() {
  	this.getUser();
  }

  getUser(): void{
  	this.id = +this.route.snapshot.paramMap.get('id');
  	this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

}
