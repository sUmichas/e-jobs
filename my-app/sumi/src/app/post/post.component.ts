import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {

  posts: Post[];


  constructor(
    private postService: PostService) { }

  ngOnInit() {
  	this.getPosts();

  }

  getPosts(): void{
  	this.postService.getPosts()
  		.subscribe(posts => this.posts = posts);
  }



}
