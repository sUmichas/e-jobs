import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Post } from '../post';
import { PostService } from '../post.service';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserpostsComponent implements OnInit {

  posts: Post[] = [];


  constructor(
  	private route: ActivatedRoute,
  	private postService: PostService,
    private auth: AuthService) { }

  ngOnInit() {
  	this.getPosts();
  }

  getPosts(): void{
    if (this.auth.isLoggedIn){
    	this.postService.getUserPosts(localStorage.getItem('username_'))
    		.subscribe(posts => this.posts = posts);
    }
  }


}
