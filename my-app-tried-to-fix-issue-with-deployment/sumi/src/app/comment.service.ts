import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { ErrorHandlingService } from './errorhandling.service';

import { Comment } from './comment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CommentService {

  commentsUrl = 'api/posts/{{comment.post}}/comments'

  constructor(
    private http: HttpClient,
    private message: MessageService,
    private eh: ErrorHandlingService
  ) { }

  /** GET comments from the server */
  getComments(postId: number): Observable<Comment[]> {
    let url = `api/posts/${postId}/comments`;
    return this.http.get<Comment[]>(url, { withCredentials: true })
      .pipe(
        tap(comments => this.message.add(`fetched comments`)),
        catchError(this.eh.handleError('getComments', []))
      );
  }

  /** POST: add a new comment to the server */
  addComment(comment: Comment): Observable<Comment> {
    let url = `api/posts/${comment.post}/comments/create`;
    return this.http.post<Comment>(url, comment, httpOptions).pipe(
      tap((comment: Comment) => this.message.add(`added comment w/ id=${comment.id}`)),
      catchError(this.eh.handleError<Comment>('addComment'))
    );
  }

  /** GET comment by id. Will 404 if id not found */
  getComment(id: number): Observable<Comment> {
    const url = `${this.commentsUrl}/${id}`;
    return this.http.get<Comment>(url).pipe(
      tap(_ => this.log(`fetched comment id=${id}`)),
      catchError(this.eh.handleError<Comment>(`getComment id=${id}`))
    );
  }


  private log(message: string): void {
    this.message.add('CommentService: ' + message);
  }
 

}