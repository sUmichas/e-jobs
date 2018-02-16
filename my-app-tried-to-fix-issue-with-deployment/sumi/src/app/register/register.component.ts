import { Component, OnInit, ViewEncapsulation, NgZone, ElementRef, ViewChild, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../register.service';
import { User } from '../user';

import { Profile } from '../profile';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;

  @Input() 
  value: User;
  users : User[] = [];

  success: boolean = false;
  @ViewChild("template_success")
  template_success: TemplateRef<any>;

  @ViewChild("template_error")
  template_error: TemplateRef<any>;


  modalRef: BsModalRef;



  constructor(
    private router: Router,
    private userService: RegisterService,
    private fb: FormBuilder,
    private modalService: BsModalService) { 
      this.createForm();
    }

    createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      profile: this.fb.group({
        age: ['', Validators.required],
        address: ['', Validators.required],
        job_title: ['', Validators.required],
        job_description: ['', Validators.required],
        gender: ['', Validators.required]
      })
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.success = false;
    value.profile['age'] = JSON.stringify(parseInt(value.profile['age']));
    this.userService.addUser(value)
      .subscribe(value => {
        this.users.push(value);
        this.success = true;
      },
      error => {
        this.success = false;
      }
      );
    //this.registerForm.reset();
    this.openModal(this.success)

  }

   ngOnInit() {
  }

  openModal(success: boolean) {
    if (success == true){
      this.modalRef = this.modalService.show(this.template_success);
    } else if (success == false) {
      this.modalRef = this.modalService.show(this.template_error);
    } else if ( success === undefined){
      console.log("Kati phge strava")
    }
  }






}
