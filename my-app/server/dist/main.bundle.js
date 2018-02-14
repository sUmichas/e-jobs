webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__ = __webpack_require__("../../../../../src/app/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_detail_post_detail_component__ = __webpack_require__("../../../../../src/app/post-detail/post-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userposts_userposts_component__ = __webpack_require__("../../../../../src/app/userposts/userposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'yourposts', component: __WEBPACK_IMPORTED_MODULE_8__userposts_userposts_component__["a" /* UserpostsComponent */] },
    { path: 'profiles', component: __WEBPACK_IMPORTED_MODULE_10__user_user_component__["a" /* UserComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_9__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'post', component: __WEBPACK_IMPORTED_MODULE_4__post_post_component__["a" /* PostComponent */] },
    { path: 'create-post', component: __WEBPACK_IMPORTED_MODULE_5__create_post_create_post_component__["a" /* CreatePostComponent */] },
    { path: 'posts/:id', component: __WEBPACK_IMPORTED_MODULE_6__post_detail_post_detail_component__["a" /* PostDetailComponent */] },
    { path: 'posts/:id/comment', component: __WEBPACK_IMPORTED_MODULE_7__comment_comment_component__["a" /* CommentComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'e-jobs';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__comment_service__ = __webpack_require__("../../../../../src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__create_post_create_post_component__ = __webpack_require__("../../../../../src/app/create-post/create-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__post_post_component__ = __webpack_require__("../../../../../src/app/post/post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__post_detail_post_detail_component__ = __webpack_require__("../../../../../src/app/post-detail/post-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__userposts_userposts_component__ = __webpack_require__("../../../../../src/app/userposts/userposts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__token_interceptor__ = __webpack_require__("../../../../../src/app/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var routes = [];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_23__create_post_create_post_component__["a" /* CreatePostComponent */],
                __WEBPACK_IMPORTED_MODULE_24__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_25__post_detail_post_detail_component__["a" /* PostDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_28__comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_26__userposts_userposts_component__["a" /* UserpostsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_30__user_user_component__["a" /* UserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_22__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* CollapseModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["g" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* RatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_13__message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__errorhandling_service__["a" /* ErrorHandlingService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_27__token_interceptor__["a" /* TokenInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_14__register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_15__comment_service__["a" /* CommentService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Credentials = (function () {
    function Credentials(username, password) {
        this.username = username;
        this.password = password;
    }
    return Credentials;
}());
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AuthService = (function () {
    function AuthService(http, message, eh) {
        this.http = http;
        this.message = message;
        this.eh = eh;
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var authUrl = "api-token-auth/";
        var credentials = new Credentials(username, password);
        return this.http
            .post(authUrl, credentials, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (results) {
            if (results['token']) {
                localStorage.setItem('umichas-jwt-token', results['token']);
                localStorage.setItem('username_', username);
                _this.isLoggedIn = true;
                _this.username = username;
                _this.message.add('User ${username} logged in');
                console.log(localStorage.getItem('username'), localStorage.getItem('username_'), localStorage.getItem('umichas-jwt-token'));
                return true;
            }
            else {
                return false;
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError("login username=" + username, false)));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.message.add('User ${this.username} logged out');
        this.username = null;
        localStorage.clear();
        console.log(localStorage.getItem('umichas-jwt-token'), localStorage.getItem('username'), localStorage.getItem('username_'));
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__["a" /* ErrorHandlingService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CommentService = (function () {
    function CommentService(http, message, eh) {
        this.http = http;
        this.message = message;
        this.eh = eh;
        this.commentsUrl = 'api/posts/{{comment.post}}/comments';
    }
    /** GET comments from the server */
    CommentService.prototype.getComments = function (postId) {
        var _this = this;
        var url = "api/posts/" + postId + "/comments";
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (comments) { return _this.message.add("fetched comments"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError('getComments', [])));
    };
    /** POST: add a new comment to the server */
    CommentService.prototype.addComment = function (comment) {
        var _this = this;
        var url = "api/posts/" + comment.post + "/comments/create";
        return this.http.post(url, comment, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (comment) { return _this.message.add("added comment w/ id=" + comment.id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError('addComment')));
    };
    /** GET comment by id. Will 404 if id not found */
    CommentService.prototype.getComment = function (id) {
        var _this = this;
        var url = this.commentsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched comment id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError("getComment id=" + id)));
    };
    /** PUT: update the comment on the server */
    CommentService.prototype.updateComment = function (comment) {
        var _this = this;
        return this.http.put(this.commentsUrl, comment, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("updated comment id=" + comment); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError('updateComment')));
    };
    /** DELETE: delete the comment from the server */
    CommentService.prototype.deleteComment = function (comment) {
        var _this = this;
        var id = typeof comment === 'number' ? comment : comment;
        var url = this.commentsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("deleted comment id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.eh.handleError('deleteComment')));
    };
    CommentService.prototype.log = function (message) {
        this.message.add('CommentService: ' + message);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__errorhandling_service__["a" /* ErrorHandlingService */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {font-family: Arial, Helvetica, sans-serif;}\r\n\r\ninput[type=text], select, textarea {\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    margin-top: 6px;\r\n    margin-bottom: 16px;\r\n    resize: vertical;\r\n}\r\n\r\ninput[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=submit]:hover {\r\n    background-color: #45a049;\r\n}\r\n\r\n.container {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-outline-secondary my-4\">\n    <div class=\"card-header\">\n        Comments\n    </div>\n    <div class=\"card-body\" *ngFor=\"let comment of comments\">\n    \t<h5>{{comment.title}}</h5><small class=\"text-muted\">Date posted {{comment.date_posted.slice(0,19).split('T')}}</small>\n        <p>{{comment.description}}</p>\n        <small class=\"text-muted\">Posted by {{comment.user_name}}</small>\n        <br>\n        <hr>\n\t</div>\n<!--     <div class=\"alert alert-info\" style=\"margin:100px\" *ngIf=\"!(auth.isLoggedIn)\">\n      <strong>Sign Up/Sign In</strong> if you want to comment this post.\n    </div> -->\n\n    <div class=\"container\">\n      <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit(commentForm)\" novalidate>\n\n        <label for=\"fname\">First Name</label>\n        <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Your title..\" formControlName=\"title\" required>\n\n        <label for=\"subject\">Subject</label>\n        <textarea id=\"description\" name=\"description\" placeholder=\"Write something..\" style=\"height:100px\"\n        formControlName=\"description\" required></textarea>\n\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"commentForm.invalid\">Leave a comment</button>\n\n      </form>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment__ = __webpack_require__("../../../../../src/app/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_service__ = __webpack_require__("../../../../../src/app/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommentComponent = (function () {
    function CommentComponent(route, commentService, fb, auth) {
        this.route = route;
        this.commentService = commentService;
        this.fb = fb;
        this.auth = auth;
        this.comments = [];
        this.commentForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](),
        });
        this.createForm();
    }
    CommentComponent.prototype.createForm = function () {
        this.commentForm = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
        });
    };
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.postId = +params.get('id');
            _this.comment = _this.newComment(_this.postId);
            return _this.commentService.getComments(+params.get('id'));
        }).subscribe(function (comments) { return _this.comments = comments; });
    };
    CommentComponent.prototype.newComment = function (postid) {
        var comment = new __WEBPACK_IMPORTED_MODULE_5__comment__["a" /* Comment */]();
        comment.post = this.postId;
        comment.title = '';
        comment.description = '';
        return comment;
    };
    CommentComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        var username = localStorage.getItem('username_');
        var date_posted = Date();
        value.date_posted = date_posted;
        value.user_name = username;
        value.post = this.postId;
        this.comment = value;
        console.log(value, this.comment.post);
        this.commentService.addComment(this.comment)
            .subscribe(function (comment) {
            _this.comments.unshift(comment);
            _this.comment = _this.newComment(_this.comment.post);
        });
    };
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-post/create-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".prepend-top {\r\n    margin-top: 30px;\r\n}\r\n\r\n.form-group {\r\n    margin-bottom: 15px;\r\n    box-sizing: border-box;\r\n    font-size: 1.3rem;\r\n    color: #515358;\r\n    font-family: \"Open Sans\",Arial,Helvetica,sans-serif;\r\n    line-height: 1.5;\r\n}\r\n\r\nspan.discreet, p.discreet, label.discreet {\r\n    color: #9d9ea1;\r\n    font-family: \"Open Sans\",Arial,Helvetica,sans-serif;\r\n    line-height: 1.5;\r\n    font-size: 1.0rem;\r\n    margin-left: 3px;\r\n}\r\n\r\nagm-map {\r\n  height: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='\"main-container' class=\"wrap-container container clearfix offcanvas offcanvas-right\" style=\"display: table;table-layout: fixed;margin-top: 25px;margin-bottom: 15%;color:#515358;\" *ngIf=\"auth.isLoggedIn\">\n\t<div class=\"main-content controller-job action-new\" style=\"width: 70%;display: table-cell;background-color: white;padding: 1%\">\n\t    <div class=\"bg-fill widget-PostJob clearfix\">\n\t\t\t<header class=\"clearfix\">\n\t            <h1>\n\t            Get your Job Done!                \n\t            <aside class=\"below\">\n\t            Post a Job for Free - Start receiving proposals within minutes</aside>\n\t            </h1>\n\t        </header>\n\t<hr>\n\n\t<form class=\"form-horizontal\" name=\"form\" [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit(postForm)\" novalidate>\n\n\t\t<div class=\"form-group prepend-top\">\n\t\t        <label class=\"pull-left required\" for=\"postTitle\">Title</label>\n\t\t        \t<div style=\"display: none !important;\" ></div>\n\t\t        \t<input placeholder=\"e.g. Athens,Patissiwn 104\" class=\"form-control form-control clear\"  type=\"text\" maxlength=\"85\" formControlName=\"title\" required>\n\t\t</div>\n\n\t\t    <div class=\"mergeinput-container row\"></div>\n\n\t\t<div class=\"form-group prepend-top\">\n\t\t        <label class=\"pull-left required\" for=\"postDescription\">Description</label>\n\t\t        <textarea class=\"form-control autoresized-textarea clear\" rows=\"7\" placeholder=\"Provide a more detailed description to help you get better proposals\" formControlName=\"description\"\n\t\t        required></textarea>    </div>\n\n\t\t<div class=\"form-group prepend-top\">\n\t\t        <label class=\"pull-left required\" for=\"postPlace\">Place</label>\n\t\t        \t<div style=\"display: none !important;\" ></div><input placeholder=\"e.g. Athens,Patissiwn 104\" class=\"form-control form-control clear\"  type=\"text\" maxlength=\"85\" \n\t\t        \tformControlName=\"place\" required>\n\t\t</div>\n\n\n\t\t\n\n\t\t<div class=\"form-group prepend-top clearfix row\">\n\n\t\t    <div class=\"col-lg-4 col-md-6 col-sm-4 col-xs-6 gutter-bottom\">\n\t\t        <label class=\"pull-left required\" >Urgency level</label>\n\t\t        <select class=\"currency form-control\" formControlName=\"urgency_level\" required>\n\t\t\t\t\t<option value=\"VL\">Very Low</option>\n\t\t\t\t\t<option value=\"L\">Low</option>\n\t\t\t\t\t<option value=\"N\" selected=\"selected\">Normal</option>\n\t\t\t\t\t<option value=\"H\">High</option>\n\t\t\t\t\t<option value=\"VH\">Very High</option>\n\t\t\t\t</select>    \n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<ng-template #template_success>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left alert alert-success\"><strong>Success!</strong></h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                You created a new post successfully.\n              </div>\n        </ng-template>\n        <ng-template #template_error>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left alert alert-danger\"><strong>Error!</strong></h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                Something went wrong. Check your fields again.\n              </div>\n        </ng-template>\n\n\n\t\t\n\n\t\t<div class=\"clearfix prepend-top append-bottom\" style=\"padding-top: 15px;\">\n\t\t    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"postForm.invalid\">Post Job</button>\n\t\t</div>\n</form>\n\t\t</div>\n\n\n\t\t </div>\n\n\t\t    <aside class=\"right-column sidebar-job-new offcanvas-sidebar\" style=\"width: 29%;display: table-cell;background-color: #f8f9fc;padding: 1%\">\n\t\t        \n\t\t\t\t<h3 class=\"sidebar-header\">Useful Tips</h3>\n\t\t\t\t<div class=\"lifted-corners with-handles\">\n\t\t\t\t    <div class=\"handles\"></div>\n\t\t\t\t    <div>\n\t\t\t\t        <ul class=\"numbered-tips\">\n\t\t\t\t                            <li class=\"clearfix\">Describe your Job in as much detail as you can comfortably reveal - it will increase the quality of proposals you receive and shorten the selection process.</li>\n\t\t\t\t                            <li class=\"clearfix\">Upload as much relevant information  as possible to get a realistic quote.</li>\n\t\t\t\t                            <li class=\"clearfix\">Match the experience level to your requirements – remember, you’re looking for the best you can afford, not the cheapest you can get.</li>\n\t\t\t\t                    </ul>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t    </aside>\n\t</div>\n\n\n<div style=\"padding-bottom: 29.3%\" *ngIf=\"!(auth.isLoggedIn)\">\n\t<div class=\"alert alert-danger\" style=\"margin:100px\">\n\t  <strong>Error!</strong> You have to sign in!\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-post/create-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreatePostComponent = (function () {
    function CreatePostComponent(fb, postService, auth, modalService) {
        this.fb = fb;
        this.postService = postService;
        this.auth = auth;
        this.modalService = modalService;
        this.postForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            place: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            urgency_level: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]()
        });
        this.success = false;
        this.posts = [];
        this.createForm();
    }
    CreatePostComponent.prototype.ngOnInit = function () {
    };
    CreatePostComponent.prototype.createForm = function () {
        this.postForm_ = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            place: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            urgency_level: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
        });
    };
    CreatePostComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        var username = localStorage.getItem('username_');
        var date_posted = Date();
        value.date_posted = date_posted;
        value.user_name = username;
        console.log(value);
        this.postService.addPost(value)
            .subscribe(function (value) {
            _this.posts.push(value);
            _this.success = true;
        }, function (error) {
            _this.success = false;
        });
        this.openModal(this.success);
    };
    CreatePostComponent.prototype.openModal = function (success) {
        if (success == true) {
            this.modalRef = this.modalService.show(this.template_success);
        }
        else if (success == false) {
            this.modalRef = this.modalService.show(this.template_error);
        }
        else if (success === undefined) {
            console.log("Kati phge strava");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("template_success"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CreatePostComponent.prototype, "template_success", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("template_error"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], CreatePostComponent.prototype, "template_error", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */])
    ], CreatePostComponent.prototype, "value", void 0);
    CreatePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__("../../../../../src/app/create-post/create-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-post/create-post.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/errorhandling.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorHandlingService = (function () {
    function ErrorHandlingService(messageService) {
        this.messageService = messageService;
    }
    /**
     * Handle HTTP operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ErrorHandlingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ErrorHandlingService.prototype.log = function (message) {
        this.messageService.add('PostService: ' + message);
    };
    ErrorHandlingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], ErrorHandlingService);
    return ErrorHandlingService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\r\n  color: white;\r\n  bottom:0;\r\n  width: 100%;\r\n  padding-bottom: 4%;\r\n  background-color: black;\r\n  padding-top: 3%\r\n}\r\n\r\nfooter a{\r\n  color:white;\r\n}\r\n\r\n.page-wrap{\r\n\tposition: relative;\r\n}\r\n\r\n#yo{\r\n  background-color: black;\r\n  color:white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"footer navbar-fixed-bottom\" id=\"footer\">\n\n        <!--/.container--> \n        <div class=\"container\" style=\"background-color: black\">\n            <p class=\"pull-left\"> Copyright sUmichas 2018 </p>\n            <div class=\"pull-right\">\n                <ul class=\"nav nav-pills payments\">\n                    <li><i class=\"fa fa-cc-visa\"></i></li>\n                    <li><i class=\"fa fa-cc-mastercard\"></i></li>\n                    <li><i class=\"fa fa-cc-amex\"></i></li>\n                    <li><i class=\"fa fa-cc-paypal\"></i></li>\n                </ul> \n            </div>\n        </div>\n    </div>\n    <!--/.footer-->\n\n    <!--/.footer-bottom--> \n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, ".navbar{\r\n\tbackground-color: black;\r\n\tborder-bottom: solid 2px;\r\n\tborder-bottom-color: #0d0d0d;\r\n\tpadding: -1%;\r\n}\r\na{\r\n\ttext-decoration: none !important;\r\n}\r\n/*\r\n * Social Buttons for Bootstrap\r\n *\r\n * Copyright 2013 Panayiotis Lipiridis\r\n * Licensed under the MIT License\r\n *\r\n * https://github.com/lipis/bootstrap-social\r\n */\r\n\r\n.btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social :first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\r\n.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg :first-child{line-height:45px;width:45px;font-size:1.8em}\r\n.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm :first-child{line-height:28px;width:28px;font-size:1.4em}\r\n.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs :first-child{line-height:20px;width:20px;font-size:1.2em}\r\n.btn-social-icon{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding-left:0;padding-right:0}.btn-social-icon :first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\r\n.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg :first-child{line-height:45px;width:45px;font-size:1.8em}\r\n.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm :first-child{line-height:28px;width:28px;font-size:1.4em}\r\n.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs :first-child{line-height:20px;width:20px;font-size:1.2em}\r\n.btn-social-icon :first-child{border:none;text-align:center;width:100% !important}\r\n.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}\r\n.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}\r\n.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}\r\n.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,0.2)}.btn-facebook:hover,.btn-facebook:focus,.btn-facebook:active,.btn-facebook.active,.open .dropdown-toggle.btn-facebook{color:#fff;background-color:#30487b;border-color:rgba(0,0,0,0.2)}\r\n.btn-facebook:active,.btn-facebook.active,.open .dropdown-toggle.btn-facebook{background-image:none}\r\n.btn-facebook.disabled,.btn-facebook[disabled],fieldset[disabled] .btn-facebook,.btn-facebook.disabled:hover,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook:hover,.btn-facebook.disabled:focus,.btn-facebook[disabled]:focus,fieldset[disabled] .btn-facebook:focus,.btn-facebook.disabled:active,.btn-facebook[disabled]:active,fieldset[disabled] .btn-facebook:active,.btn-facebook.disabled.active,.btn-facebook[disabled].active,fieldset[disabled] .btn-facebook.active{background-color:#3b5998;border-color:rgba(0,0,0,0.2)}\r\n.btn-google-plus{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}.btn-google-plus:hover,.btn-google-plus:focus,.btn-google-plus:active,.btn-google-plus.active,.open .dropdown-toggle.btn-google-plus{color:#fff;background-color:#ca3523;border-color:rgba(0,0,0,0.2)}\r\n.btn-google-plus:active,.btn-google-plus.active,.open .dropdown-toggle.btn-google-plus{background-image:none}\r\n.btn-google-plus.disabled,.btn-google-plus[disabled],fieldset[disabled] .btn-google-plus,.btn-google-plus.disabled:hover,.btn-google-plus[disabled]:hover,fieldset[disabled] .btn-google-plus:hover,.btn-google-plus.disabled:focus,.btn-google-plus[disabled]:focus,fieldset[disabled] .btn-google-plus:focus,.btn-google-plus.disabled:active,.btn-google-plus[disabled]:active,fieldset[disabled] .btn-google-plus:active,.btn-google-plus.disabled.active,.btn-google-plus[disabled].active,fieldset[disabled] .btn-google-plus.active{background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}\r\n.btn-vk:active,.btn-vk.active,.open .dropdown-toggle.btn-vk{background-image:none}\r\n.btn-vk.disabled,.btn-vk[disabled],fieldset[disabled] .btn-vk,.btn-vk.disabled:hover,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk:hover,.btn-vk.disabled:focus,.btn-vk[disabled]:focus,fieldset[disabled] .btn-vk:focus,.btn-vk.disabled:active,.btn-vk[disabled]:active,fieldset[disabled] .btn-vk:active,.btn-vk.disabled.active,.btn-vk[disabled].active,fieldset[disabled] .btn-vk.active{background-color:#587ea3;border-color:rgba(0,0,0,0.2)}\r\n\r\n\r\n/* \r\n * Only for this example - not needed for the buttons\r\n * ----------------------------------------------------- */\r\n.btn-social-icon {margin-bottom: 4px;}\r\n.social-class .social-hex{font-family:Monaco,Menlo,Consolas,\"Courier New\",monospace;font-size:10px;opacity:.3;float:right}\r\n.social-class li{margin-bottom:4px}.social-class li:hover .social-hex{opacity:1}\r\n.social-class li:hover code{background-color:#e8e8ee}\r\n.social-class code{cursor:default}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n\t <a routerLink='/main'><img src=\"assets/logo.png\" alt=\"logo\" style=\"display: block;margin-left: 8%;color:white;\">\n   </a>\n\n  <ul class=\"nav justify-content-center\" style=\"margin-right: 61%\">\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a class=\"nav-link\" routerLink=\"/post\">Posts</a>\n    </li>\n    <li class=\"nav-item\" routerLinkActive=\"active\">\n      <a class=\"nav-link\" routerLink=\"/create-post\">Create new post</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/profiles\">Users</a>\n    </li>\n  </ul>\n\n      <span [ngSwitch]=\"auth.isLoggedIn\" style=\"width:100%;margin-left: 85%;\">\n        <span *ngSwitchCase=\"false\">\n          <div class=\"btn-group\" dropdown >\n  \t\t    <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"background-color: black;border-color: black\" >\n  \t\t      Sign in/Sign up <span class=\"caret\"></span>\n  \t\t    </button>\n  \t\t    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" >\n \n            <li role=\"menuitem\">\n            <a class=\"dropdown-item\" (click)=\"open(content)\">Log in</a>\n            \n            <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n              <div class=\"modal-header\">\n                <h2 class=\"modal-title\" style=\"margin-left: 38%;\">Log in</h2>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"container\">\n                  <div class=\"card card-container\" style=\"padding: 5%\">\n                      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n                      <div class=\"form-group\">\n                        Username:\n                        <input #username\n                        type=\"text\" id=\"username\" class=\"form-control\" placeholder=\"Username\" name=\"username\"  required autofocus>\n                      </div>\n                      <br>\n                      <div class=\"form-group\">\n                        Password:\n                        <input #password\n                        type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\n                       required>      \n                      </div>\n\n                      <button (click)=\"login(username.value,password.value)\" (click)=\"c('Close click')\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\n                  </div><!-- /card-container -->\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\n              </div>\n            </ng-template>\n            </li>\n  \t\t      <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/register\">Register</a>\n  \t\t    </li>\n        </ul>\n      </div>\n          </span>\n          <span *ngSwitchCase=\"true\">\n            <div class=\"btn-group\" dropdown style=\"width:100%;\" >\n            <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\" style=\"background-color: black;border-color: black\" >\n              {{username}} <span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" >\n              <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"logout()\">Log out</a>\n              </li>\n              <li role=\"menuitem\"><a class=\"dropdown-item\" routerLink=\"/yourposts\">Your Posts</a>\n              </li>\n            </ul>\n            </div>\n          </span>\n        </span>\n\n\n\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__ = __webpack_require__("../../../../../src/app/errorhandling.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(auth, eh, router, modalService) {
        this.auth = auth;
        this.eh = eh;
        this.router = router;
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HeaderComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    HeaderComponent.prototype.login = function (username, password) {
        var _this = this;
        this.auth.login(username, password)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/']);
            }
        });
        this.username = localStorage.getItem('username_');
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__errorhandling_service__["a" /* ErrorHandlingService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa.fa-check-square-o{\r\n\tcolor:green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "    <carousel>\n      <slide>\n        <img src=\"assets/pic1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;opacity: 0.8\">\n        <div class=\"carousel-caption\" style=\"padding-bottom: 25%;color: black;font-size: 46;\">\n          <h3>Step One:</h3>\n          <p><b>Sign up and start posting what you need.</b></p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"assets/pic2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;opacity: 0.8\">\n        <div class=\"carousel-caption\" style=\"padding-bottom: 25%;color: black;font-size: 16px;\">\n          <h3>Step Two:</h3>\n          <p><b>Match your \"job services\" with someone that needs you.</b></p>\n        </div>\n      </slide>\n      <slide>\n        <img src=\"assets/pic3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;opacity: 0.8\">\n        <div class=\"carousel-caption\" style=\"padding-bottom: 25%;color: black;font-size: 16px;\">\n          <h3>Step Three:</h3>\n          <p><b>Make a deal!</b></p>\n        </div>\n      </slide>\n    </carousel>\n    \n    <div class=\"Container\" style=\"padding:8%\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"HomepageIntro-title\">Is money the only way to buy and sell products and services?</h2>\n                <p>\n                    \n                The answer to this question has been given centuries ago before the term money had even been defined. Before money undertook the world (700 B.C), \n                people used to exchange commodities and services  to cover their essential needs. For example in ancient <b>Greece</b> people from different industries used \n                to exchange olive oil to buy flour or wheat.\n\n                </p>\n              \n            </div>\n           </div>\n    </div>\n\n    \n    <div class=\"Container\" style=\"padding:8%;background-color:white; \">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"HomepageIntro-title\">How could we leverage this commerce method nowadays?</h2>\n                <p>\n                    Technology and Social Community is the major part of the answer. \n                    We can utilize the power that we have on the edge of our fingers by exposing our needs and also by\n                    demonstrating our capabilities and resources that we are able offer as exchange. \n                    World wide web can give you a great outreach to prospect people that they are seeking the resources or knowledge you have and also\n                    potentially they can help you as return to your needs.\n                </p>\n                \n            </div>\n            \n\n        </div>\n    </div>\n\n    <div class=\"Container\" style=\"padding:8%\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"HomepageIntro-title\">What is E-Jobs?</h2>\n                <p>\n                    <i>E-Jobs is a platform that enables users to exchange services that they need with services that they can offer. That simple!!!</i>\n                </p>\n                <p>\n                    Let’s see an example: We assume that you are a encoder and you are really good in fixing bugs and errors but you got not any knowledge on fixing your broken car. What you can do is , \n                    you can raise a tender with a simple description of what you need and what you can offer. The title could be like “I am a skilled programmer with powerful mind on 0 and 1 but I have never use screwdriver”. \n                    What could happen on this case study is that you could get a reply message on this add from a garage that they could fix your car and would ask from you to fix the bugs they have on their web presence.\n                    You exchange numbers you give a good review to E-jobs and you are done. Your car is fixed, their website is running as hell and everyone is satisfied without any money involvement.\n\n               </p>\n            </div>\n            <div class=\"col\">\n                <h3>How do you benefit?</h3>\n                <ul class=\"HomepageIntro-points\">\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        No money involvement.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        No taxation charges.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        You help by getting helped.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        You help by getting helped.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        Develop your personal skills.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        Help people that they don't have the money to cover their needs but they have the knowledge you need.\n                    </li>\n                    <li class=\"HomepageIntro-points-item\">\n                        <i class=\"fa fa-check-square-o\" aria-hidden=\"true\"></i>\n                        Establish a coulture against capitalism that: Money is not the King,Humanity is!!!!!\n                    </li>\n                </ul>\n            </div>\n\n        </div>\n    </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages.length = 0;
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#post-content{\r\n\tpadding: 50px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"container\" style=\"background-color: #F3F6FA\">\n\n      <div class=\"row\">\n\n        <!-- /.col-lg-3 -->\n\n        <div class=\"col-lg-12\" *ngIf=\"post\" id=\"post-content\">\n          <h1 style=\"font-family:Comic Sans, cursive\"> Job Details</h1>\n\n          <div class=\"card mt-4\" *ngIf=\"!(isOwner)\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\">{{ post.title }}</h2>\n              <p class=\"pull-right\">\n                <button (click)=\"isOwner = true\"><i class=\"fa fa-edit\"></i>Edit</button>\n                <br>\n                <b>{{post.user_name}}</b></p>\n              <h4>Address: {{post.place}}</h4><small>Date posted: {{post.date_posted.slice(0,19).split('T')}}</small>\n              <hr>\n              <p class=\"card-text\">{{post.description}}</p>\n            </div>\n\n          </div>\n          <!-- /.card -->\n          <div class=\"col-lg-12\" *ngIf=\"post\" id=\"post-content\">\n          <h1 style=\"font-family:Comic Sans, cursive\"> Job Details</h1>\n\n          <div class=\"card mt-4\" *ngIf=\"isOwner\">\n            <div class=\"card-body\">\n              <h2 class=\"card-title\"><input [(ngModel)]=\"post.title\" placeholder=\"title\"></h2>\n              <p class=\"pull-right\">\n                <button><i class=\"fa fa-edit\"></i></button>\n                <br>\n                <b>{{post.user_name}}</b></p>\n              <h4>Address:<input [(ngModel)]=\"post.place\" placeholder=\"place\"></h4><small>Date posted: {{post.date_posted.slice(0,19).split('T')}}</small>\n              <hr>\n              <p class=\"card-text\"><input [(ngModel)]=\"post.description\" placeholder=\"description\"></p>\n            </div>\n            <ng-template #template>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left\"><strong>Error!</strong></h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                You have to login as {{post.user_name}} to edit this post.\n              </div>\n            </ng-template>\n\n            <button (click)=\"save(template)\" (click)=\"isOwner = false\" style=\"width:10%\">Save</button>\n          </div>\n\n          <app-comment></app-comment>\n          <!-- /.card -->\n        </div>\n        <!-- /.col-lg-9 -->\n\n      </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/post-detail/post-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post__ = __webpack_require__("../../../../../src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostDetailComponent = (function () {
    function PostDetailComponent(route, postService, location, modalService) {
        this.route = route;
        this.postService = postService;
        this.location = location;
        this.modalService = modalService;
        this.isOwner = false;
        this.template = this.template;
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    PostDetailComponent.prototype.getPost = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.postService.getPost(this.id).subscribe(function (post) { return _this.post = post; });
    };
    PostDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PostDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    PostDetailComponent.prototype.save = function (template) {
        var _this = this;
        if (localStorage.getItem('username_') != null) {
            if (localStorage.getItem('username_') == this.post.user_name) {
                this.postService.updatePost(this.post, this.id)
                    .subscribe(function () { return _this.goBack(); });
            }
            else {
                this.openModal(template);
            }
        }
        else {
            this.openModal(template);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */])
    ], PostDetailComponent.prototype, "post", void 0);
    PostDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-detail',
            template: __webpack_require__("../../../../../src/app/post-detail/post-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post-detail/post-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PostDetailComponent);
    return PostDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var PostService = (function () {
    function PostService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.postsUrl = 'api/posts';
        this.postsUrl_2 = 'api/posts/create';
        this.userUrl = 'api/yourposts';
    }
    /** GET posts from the server */
    PostService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get(this.postsUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (posts) { return _this.log("fetched posts"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getPosts', [])));
    };
    /** GET post by id. Will 404 if id not found */
    PostService.prototype.getPost = function (id) {
        var _this = this;
        var url = this.postsUrl + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched post id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getPost id=" + id)));
    };
    /** GET posts of user from the server */
    PostService.prototype.getUserPosts = function (user_name) {
        var _this = this;
        return this.http.get(this.userUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (posts) { return _this.log("fetched posts"); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getPosts', [])));
    };
    /** PUT: update the post on the server */
    PostService.prototype.updatePost = function (post, id) {
        var _this = this;
        var url = this.postsUrl + "/" + id;
        return this.http.put(url, post, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("updated post id=" + post); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updatePost')));
    };
    /** POST: add a new post to the server */
    PostService.prototype.addPost = function (post) {
        var _this = this;
        return this.http.post(this.postsUrl_2, post, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (post) { return _this.log("added post w/ "); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addPost')));
    };
    PostService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    PostService.prototype.log = function (message) {
        this.messageService.add('PostService: ' + message);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());



/***/ }),

/***/ "../../../../../src/app/post/post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".portfolio-item {\r\n    margin-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"background-color: #F3F6FA\">\n\n      <!-- Page Heading -->\n      <h1 class=\"my-4\" style=\"font-family:Comic Sans, cursive\">Job Posts\n      </h1>\n\n      <div class=\"row\" >\n        <div *ngFor=\"let post of posts\" class=\"col-lg-4 col-md-4 col-sm-6 portfolio-item\">\n          <div class=\"card h-100\" style=\"\n    background-color: #DFE7F2;\">\n            <div class=\"card-body\">\n              <p class=\"pull-right\"><b>{{post.place}}</b></p>\n              <br>\n              <h4 class=\"card-title\">\n                <a routerLink=\"/posts/{{post.id}}\">{{post.title}}</a>\n              </h4>\n              <ul>\n              \t<li style=\"font-size:15px;\"><b>Name:</b> {{post.user_name}}</li>\n              </ul>\n              <p class=\"card-text\">{{post.description}}</p>\n            </div>\n          </div>\n        </div> \n      </div>\n\n      <!-- /.row -->\n\n    </div>\n    <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = (function () {
    function PostComponent(postService) {
        this.postService = postService;
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/post/post.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-md-10 \">\n<form class=\"form-horizontal\" *ngIf=\"user\" style=\"padding:20px;padding-bottom: 267px;\">\n<fieldset>\n\n<!-- Form Name -->\n<legend style=\"text-align: :center\"><h1>Profile</h1></legend>\n\n<!-- Text input-->\n\n\n\n\n<div class=\"form-group\" style=\"padding-top: 10px;\">\n  <label class=\"col-md-4 control-label\" for=\"username\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tUsername:\n\t\t</p>\n\t</h5>{{user.username}}\n  </label>  \n  <div class=\"col-md-4\">\n <div class=\"input-group\">\n       <!-- <input id=\"Name (Full name)\" name=\"Name (Full name)\" type=\"text\" placeholder=\"Name (Full name)\" class=\"form-control\"> -->\n      </div>\n\n    \n  </div>\n\n  \n</div>\n\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"email\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tE-mail:\n\t\t</p>\n\t</h5>{{user.email}}\n  </label>   <div class=\"col-md-4\">\n <div class=\"input-group\">\n       <!-- <input id=\"Name (Full name)\" name=\"Name (Full name)\" type=\"text\" placeholder=\"Name (Full name)\" class=\"form-control\"> -->\n      </div>\n\n    \n  </div>\n\n  \n</div>\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"Full name\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tFull name:\n\t\t</p>\n\t</h5>{{user.first_name}} {{user.last_name}}\n  </label>   <div class=\"col-md-4\">\n  <div class=\"input-group\">\n      <!-- <input id=\"Father\" name=\"Father\" type=\"text\" placeholder=\"Father's name\" class=\"form-control input-md\"> -->\n\n      </div>\n    \n  </div>\n</div>\n\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"age\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tAge:\n\t\t</p>\n\t</h5>{{user.profile.age}}\n  </label>   <div class=\"col-md-4\">\n\n  <div class=\"input-group\">\n       <!-- <input id=\"dob\" name=\"Date Of Birth\" type=\"text\" placeholder=\"Date Of Birth\" class=\"form-control input-md\"> -->\n      </div>\n  \n    \n  </div>\n</div>\n<!-- Text input-->\n\n<!-- Multiple Radios (inline) -->\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"gender\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tGender:\n\t\t</p>\n\t</h5>{{user.profile.gender}}\n  </label>   <div class=\"col-md-4\"> \n\n  </div>\n</div>\n\n<!-- Multiple Radios (inline) -->\n\n\n\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"address\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tAddress:\n\t\t</p>\n\t</h5>{{user.profile.address}}\n  </label>   <div class=\"col-md-4\">\n  <div class=\"input-group\">\n    <!-- <input id=\"phoneno\" name=\"phoneno\" type=\"text\" placeholder=\"Phone No\" class=\"form-control input-md\"> -->\n      </div>\n  </div>\n</div>\n\n<!-- Text input-->\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"job_title\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tJob Title:\n\t\t</p>\n\t</h5>{{user.profile.job_title}}\n  </label>   <div class=\"col-md-4\">\n  <div class=\"input-group\">\n    <!-- <input id=\"Email Address\" name=\"Email Address\" type=\"text\" placeholder=\"Email Address\" class=\"form-control input-md\"> -->\n    \n      </div>\n  \n  </div>\n</div>\n\n\n\n\n\n<!-- Textarea -->\n<div class=\"form-group\">\n<label class=\"col-md-4 control-label\" for=\"Name (Full name)\">\n  \t<h5 style=\"display: inline;\">\n  \t\t<p style=\"display: inline;\">\n\t  \t\tJob Description:\n\t\t</p>\n\t</h5>{{user.profile.job_description}}\n  </label>   <div class=\"col-md-4\">                     \n    <!-- <textarea class=\"form-control\" rows=\"10\"  id=\"Overview\" name=\"Overview \">{{user.profile.job_description}}</textarea> -->\n  </div>\n</div>\n\n\n\n</fieldset>\n</form>\n</div>\n\n</div>\n   </div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(route, userService, location, modalService) {
        this.route = route;
        this.userService = userService;
        this.location = location;
        this.modalService = modalService;
        this.isUser = false;
        this.template = this.template;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.userService.getUser(this.id).subscribe(function (user) { return _this.user = user; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */])
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var RegisterService = (function () {
    function RegisterService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.usersUrl = 'api/register';
        this.user = 'api/users';
    }
    RegisterService.prototype.getUsers = function () {
        return this.http.get(this.user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (users) { return console.log(users); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getUsers', [])));
    };
    RegisterService.prototype.getUser = function (id) {
        var _this = this;
        var url = this.user + "/" + id;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (_) { return _this.log("fetched user id=" + id); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getUser id=" + id)));
    };
    /** POST: add a new user to the server */
    RegisterService.prototype.addUser = function (user) {
        var _this = this;
        return this.http.post(this.usersUrl, user, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["c" /* tap */])(function (user) { return _this.log("added user w/ "); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addUser')));
    };
    RegisterService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    RegisterService.prototype.log = function (message) {
        this.messageService.add('RegisterService: ' + message);
    };
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\r\n  height: 300px;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 10%;padding-bottom: 10%\">\n    <form class=\"form-horizontal\" name=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm)\" novalidate>\n        <div class=\"row\" style=\"padding-bottom: 20px\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <h2 style=\"text-align: center;\">Register New User</h2>\n                <hr>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <p style=\"font-size:20px\"><i>Personal Info</i></p>\n                <hr>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"username\">Username</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                        <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\"\n                               placeholder=\"John Doe\" formControlName=\"username\" \n                               required>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"first_name\">First Name</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                        <input type=\"text\" name=\"first_name\" class=\"form-control\" id=\"first_name\"\n                               placeholder=\"John Doe\" formControlName=\"first_name\" \n                               required>\n                    </div>\n                </div>\n            </div>\n  \n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"last_name\">Last Name</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                        <input type=\"text\" name=\"last_name\" class=\"form-control\" id=\"last_name\"\n                               placeholder=\"John Doe\" required formControlName=\"last_name\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"email\">E-Mail Address</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                        <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\"\n                               placeholder=\"you@example.com\" required formControlName=\"email\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3 field-label-responsive\">\n                <label for=\"password\">Password</label>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group has-danger\">\n                    <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                        <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                        <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"\n                               placeholder=\"Password\" required formControlName=\"password\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div formGroupName=\"profile\">\n  \n\t        <div class=\"row\">\n\t            <div class=\"col-md-3 field-label-responsive\">\n\t                <label for=\"gender\">Gender</label>\n\t            </div>\n\t            <div class=\"col-md-6\">\n\t                <div class=\"form-group\">\n                        <select class=\"currency form-control\" id=\"gender\" formControlName=\"gender\">\n                            <option value=\"M\">Male</option>\n                            <option value=\"F\" selected=\"selected\">Female</option>\n\n                        </select> \n\t                </div>\n\t            </div>\n\n\t        </div>\n\t    \n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"age\">Age</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"></div>\n                            <input type=\"text\" name=\"age\" class=\"form-control\" id=\"age\"\n                                   placeholder=\"John Doe\" required formControlName=\"age\">\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            \n            <br>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <p style=\"font-size:20px\"><i>Location Info</i></p>\n                    <hr>\n                </div>\n            </div>\n\n           <div class=\"row\">\n                \n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"address\">Type your address: </label>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" formControlName=\"address\">\n                        </div>\n                    </div>\n                </div>\n      \n            </div>\n\n   \n\n\n\n           <br>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <p style=\"font-size:20px\"><i>Job Info</i></p>\n                    <hr>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"job_title\">Job Title</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-user\"></i></div>\n                            <input type=\"text\" name=\"job_title\" class=\"form-control\" id=\"job_title\"\n                                   placeholder=\"John Doe\" required formControlName=\"job_title\">\n                        </div>\n                    </div>\n                </div>\n     \n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"job_description\">Job Description</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <textarea name=\"job_description\" class=\"form-control\" id=\"job_description\"\n                                   placeholder=\"Describe your skills\" rows=\"5\"\n                                   formControlName=\"job_description\"></textarea>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n        <ng-template #template_success>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left alert alert-success\"><strong>Success!</strong></h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                You can sign in and start posting your \"job needs\".\n              </div>\n        </ng-template>\n        <ng-template #template_error>\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title pull-left alert alert-danger\"><strong>Error!</strong></h4>\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                Something went wrong. Check your fields again.\n              </div>\n        </ng-template>\n        <script>window.__theme = 'bs4';</script>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col-md-6\">\n                <button [disabled]=\"registerForm.invalid\" type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-user-plus\"></i> Register</button>\n            </div>\n        </div>\n    </form>\n</div> "

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(router, userService, fb, modalService) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.modalService = modalService;
        this.users = [];
        this.success = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            profile: this.fb.group({
                age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
                address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
                job_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
                job_description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
                gender: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
            })
        });
    };
    RegisterComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value.profile['age'] = parseInt(value.profile['age']);
        this.userService.addUser(value)
            .subscribe(function (value) {
            _this.users.push(value);
            _this.success = true;
        }, function (error) {
            _this.success = false;
        });
        //this.registerForm.reset();
        this.openModal(this.success);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.openModal = function (success) {
        if (success == true) {
            this.modalRef = this.modalService.show(this.template_success);
        }
        else if (success == false) {
            this.modalRef = this.modalService.show(this.template_error);
        }
        else if (success === undefined) {
            console.log("Kati phge strava");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */])
    ], RegisterComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("template_success"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], RegisterComponent.prototype, "template_success", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("template_error"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], RegisterComponent.prototype, "template_error", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TokenInterceptor = (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var token = localStorage.getItem('umichas-jwt-token');
        if (token) {
            var authReq = req.clone({
                setHeaders: {
                    Authorization: "JWT " + localStorage.getItem('umichas-jwt-token')
                }
            });
            return next.handle(authReq);
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.list-group-item {\r\n    height:auto;\r\n    min-height:220px;\r\n}\r\na.list-group-item.active small {\r\n    color:black;\r\n}\r\n.stars {\r\n    margin:20px auto 1px;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\t\t<div class=\"well\">\n        <h1 class=\"text-center\">All Users</h1>\n        <div class=\"list-group\">\n          <div *ngFor=\"let user of users\" class=\"list-group-item active\" style=\"margin-bottom: 20px;background-color: white;color:black\" >\n                <div >\n                \t<a routerLink=\"/profile/{{user.id}}\">{{user.username}}</a>\n\n                    \t<h4 class=\"list-group-item-heading\"> Job Title:  <small>{{user.profile.job_title}}</small></h4>\n                 \n                    <p class=\"list-group-item-text\"> <b>Job Description:</b>\n                    \t{{user.profile.job_description}}\n                    </p>\n                </div>\n                <div class=\"col-md-3 text-center\">\n \n                </div>\n          </div>         \n        </div>\n        </div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__("../../../../../src/app/register.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) { return _this.users = users; });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/userposts/userposts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userposts/userposts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\" >\n    <div class=\"card card-outline-secondary my-4\" *ngIf=\"auth.isLoggedIn\">\n\n        <div class=\"card-header\">\n            Your posts\n        </div>\n        <div class=\"card-body\" *ngFor=\"let post of posts\">\n        \t<a routerLink=\"/posts/{{post.id}}\"><h5>{{post.title}}</h5></a><small class=\"text-muted\">Date posted {{post.date_posted.slice(0,19).split('T')}}</small>\n            <p>{{post.description}}</p>\n            <small class=\"text-muted\">Posted by {{post.user_name}}</small>\n\n            <br>\n            <hr>\n    \t</div>\n        \n    </div>\n</div>\n\n<div style=\"padding-bottom: 29.3%\" *ngIf=\"!(auth.isLoggedIn)\">\n    <div class=\"alert alert-danger\" style=\"margin:100px\">\n      <strong>Error!</strong> You have to sign in!\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/userposts/userposts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserpostsComponent = (function () {
    function UserpostsComponent(route, postService, auth) {
        this.route = route;
        this.postService = postService;
        this.auth = auth;
        this.posts = [];
    }
    UserpostsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    UserpostsComponent.prototype.getPosts = function () {
        var _this = this;
        if (this.auth.isLoggedIn) {
            this.postService.getUserPosts(localStorage.getItem('username_'))
                .subscribe(function (posts) { return _this.posts = posts; });
        }
    };
    UserpostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userposts',
            template: __webpack_require__("../../../../../src/app/userposts/userposts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/userposts/userposts.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]])
    ], UserpostsComponent);
    return UserpostsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map