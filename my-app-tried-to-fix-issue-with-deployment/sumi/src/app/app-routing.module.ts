import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CommentComponent } from './comment/comment.component';
import { UserpostsComponent} from './userposts/userposts.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	{ path: "",redirectTo: '/main', pathMatch: 'full'},
	{ path: 'main', component: MainComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'yourposts', component: UserpostsComponent},
	{ path: 'profiles', component: UserComponent},
	{ path: 'profile/:id', component: ProfileComponent},
	{ path: 'post', component: PostComponent},
	{ path: 'create-post', component: CreatePostComponent},
	{ path: 'posts/:id', component: PostDetailComponent},
	{ path: 'posts/:id/comment', component: CommentComponent},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
