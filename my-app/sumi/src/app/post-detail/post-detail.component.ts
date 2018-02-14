import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { TemplateRef } from '@angular/core';

import { PostService } from '../post.service';

import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostDetailComponent implements OnInit {

  @Input()
  post:Post;
  isOwner:boolean = false;
  id: number;
  template = this.template;

  modalRef: BsModalRef;
  

  constructor(
  	private route: ActivatedRoute,
  	private postService: PostService,
  	private location: Location,
    private modalService: BsModalService
  	) { }

  ngOnInit() {
  	this.getPost();
  }

  getPost(): void{
  	this.id = +this.route.snapshot.paramMap.get('id');
  	this.postService.getPost(this.id).subscribe(post => this.post = post);
  }

  goBack(): void {
  	this.location.back();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  save(template: TemplateRef<any>): void {
    if (localStorage.getItem('username_') != null){
      if (localStorage.getItem('username_') == this.post.user_name){
        this.postService.updatePost(this.post,this.id)
          .subscribe(() => this.goBack());
      }
      else {
        this.openModal(template)
      }
    }
    else {
      this.openModal(template)
    }
  }


}
