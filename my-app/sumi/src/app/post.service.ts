import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {

  private postsUrl = 'api/posts';
  private postsUrl_2 = 'api/posts/create';
  private userUrl = 'api/yourposts';
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
   return this.http.get<Post[]>(this.postsUrl)
     .pipe(
       tap(posts => this.log(`fetched posts`)),
       catchError(this.handleError('getPosts', []))
     );
  }

  /** GET post by id. Will 404 if id not found */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }

  /** GET posts of user from the server */
  getUserPosts(user_name: string): Observable<Post[]> {
   return this.http.get<Post[]>(this.userUrl)
     .pipe(
       tap(posts => this.log(`fetched posts`)),
       catchError(this.handleError('getPosts', []))
     );
  }

  /** PUT: update the post on the server */
  updatePost (post: Post, id:number): Observable<any> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.put(url, post, httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

  /** POST: add a new post to the server */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl_2, post, httpOptions).pipe(
      tap((post: Post) => this.log(`added post w/ `)),
      catchError(this.handleError<Post>('addPost'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add('PostService: ' + message);
  }

}