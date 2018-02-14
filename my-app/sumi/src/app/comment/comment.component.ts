import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Comment } from '../comment';
import { CommentService } from '../comment.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];
  comment: Comment;
  postId: number

  commentForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });

  constructor(
  	private route: ActivatedRoute,
  	private commentService: CommentService,
    private fb: FormBuilder,
  	private auth: AuthService) { 
    this.createForm(); 
  }

  createForm() {
    this.commentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  	this.route.paramMap
  		.switchMap((params: ParamMap) => {
  			this.postId = +params.get('id');
  			this.comment = this.newComment(this.postId);
  			return this.commentService.getComments(+params.get('id'))
  		}).subscribe(comments => this.comments = comments);
  }

  newComment(postid: number): Comment {
  	var comment = new Comment();
  	comment.post = this.postId;
  	comment.title = '';
  	comment.description = '';
  	return comment;
  }

  onSubmit({ value, valid }: { value: Comment, valid: boolean }) {
    var username = localStorage.getItem('username_');
    var date_posted = Date();
    value.date_posted = date_posted;
    value.user_name = username;
    value.post = this.postId;
    this.comment = value;
    console.log(value, this.comment.post);
    this.commentService.addComment(this.comment)
      .subscribe(comment => {
        this.comments.unshift(comment);
        this.comment = this.newComment(this.comment.post);
     });

   }

}
