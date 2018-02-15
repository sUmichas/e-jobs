import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule,CollapseModule, BsDropdownModule, ButtonsModule, TabsModule, ModalModule,RatingModule  } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'



import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { ErrorHandlingService } from './errorhandling.service';
import { PostService } from './post.service';
import { MessageService } from './message.service';
import { RegisterService } from './register.service';
import { CommentService } from './comment.service';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { UserpostsComponent } from './userposts/userposts.component';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { CommentComponent } from './comment/comment.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CreatePostComponent,
    PostComponent,
    PostDetailComponent,
    CommentComponent,
    UserpostsComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RatingModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [
    PostService, 
    MessageService,
    HttpClientModule,
    AuthService,
    AuthGuard,
    ErrorHandlingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    RegisterService,
    CommentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
