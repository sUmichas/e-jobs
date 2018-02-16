import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Post } from '../post';
import { PostService } from '../post.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePostComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    place: new FormControl(),
    urgency_level: new FormControl()
  });

  postForm_: FormGroup;

  success: boolean;
  @ViewChild("template_success")
  template_success: TemplateRef<any>;

  @ViewChild("template_error")
  template_error: TemplateRef<any>;


  modalRef: BsModalRef;
 
  @Input() 
  value: Post;
  posts : Post[] = [];

  constructor( 
  	private fb: FormBuilder,
    private postService: PostService,
    public auth: AuthService,
    private modalService: BsModalService
    ) {
    this.createForm(); 
    }

  ngOnInit() {
  }



  createForm() {
    this.postForm_ = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      place: ['', Validators.required],
      urgency_level: ['', Validators.required],
    });
  }

  onSubmit({ value, valid }: { value: Post, valid: boolean }) {
    this.success = false;
    var username = localStorage.getItem('username_');
    var date_posted = Date();
    value.date_posted = JSON.stringify(date_posted);
    value.user_name = JSON.stringify(username);
    console.log(value);
    this.postService.addPost(value)
      .subscribe(value =>{
        this.posts.push(value);
        this.success = true;},
        error => {
          this.success = false;
        });

    this.openModal(this.success);
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
