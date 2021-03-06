webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var js_component_component_1 = __webpack_require__("./src/app/js-component/js-component.component.ts");
var python_component_component_1 = __webpack_require__("./src/app/python-component/python-component.component.ts");
var ruby_component_component_1 = __webpack_require__("./src/app/ruby-component/ruby-component.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'js', component: js_component_component_1.JsComponentComponent },
    { path: 'python', component: python_component_component_1.PythonComponentComponent },
    { path: 'ruby', component: ruby_component_component_1.RubyComponentComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  text-align: center;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(101, 181, 224, 0.534)), to(rgb(200, 238, 130)));\r\n  background: linear-gradient(rgba(101, 181, 224, 0.534), rgb(200, 238, 130))\r\n}\r\n#magic{\r\n    color: #777;\r\n    border-right: 1px solid #777;\r\n    padding-right: 7px;\r\n    display: inline;\r\n    behavior:'smooth';\r\n    white-space: pre;\r\n}\r\ntable{\r\n  display:inline-block;\r\n  vertical-align:text-bottom;\r\n  margin: 73px 10px -68px 162px;\r\n}\r\nimg#me {\r\n    border-radius: 100%;\r\n    height: 200px;\r\n    margin-left: 25px;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n}\r\n#header{\r\n  /* background-color: rgba(53, 102, 24, 0.699); */\r\n  min-height: 250px;\r\n  width: auto;\r\n  margin: 0px;\r\n  padding: 10px;\r\n  text-align:center;\r\n  border-radius: 0 0 40% 40%;\r\n  border-bottom: goldenrod 10px solid;\r\n  -webkit-box-shadow: inset 0 1px 0 yellow;\r\n          box-shadow: inset 0 1px 0 yellow;\r\n  background-image: url(\"/assets/Work_desk.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  /* position:relative; */\r\n  /* background-color: rgba(0, 255, 0, 0.67) */\r\n}\r\n#line-break {\r\n  height: auto;\r\n  margin: 25px 98px;\r\n  border: 0.5px solid rgba(7, 3, 3, 0.904);\r\n  -webkit-box-shadow: 0px 5px 5px #888888;\r\n          box-shadow: 0px 5px 5px #888888;\r\n}\r\n#image_container {\r\n  text-align:center;\r\n}\r\n#profile {\r\n  /* min-height: 421px; */\r\n  width: 830px;\r\n  padding: 0px;\r\n  margin: auto;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  background-image: url(/assets/cpu_icon.png);\r\n  background-repeat: no-repeat;\r\n  background-size: 100%;\r\n  /* margin-left: 160px; */\r\n  /* margin-top: 15px; */\r\n  margin-bottom: 17px;\r\n  border-radius: 6%;\r\n  background-color: rgba(0,0,0,0.8);\r\n}\r\n.color {\r\n  color: green;\r\n}\r\n#profile > p, table {\r\n  font-size: 16pt;\r\n  color: #21d363;\r\n  text-shadow: #1d6e3c 2px 2px 8px;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n#profile > #bio {\r\n\r\n  padding: 100px;\r\n  margin-top: 98px;\r\n}\r\nlabel > input{ /* HIDE RADIO */\r\n  visibility: hidden; /* Makes input not-clickable */\r\n  position: absolute; /* Remove input from document flow */\r\n}\r\nlabel > input + img{ /* IMAGE STYLES */\r\n  cursor:pointer;\r\n  border:2px solid transparent;\r\n}\r\nlabel > input:checked + img{ /* (RADIO CHECKED) IMAGE STYLES */\r\n  /* border:2px solid #f00; */\r\n    border-radius: 100%;\r\n    -webkit-box-shadow: 0px 0px 30px 13px #fde61c;\r\n    box-shadow: 0px 0px 30px 13px #fde61c;\r\n    /* -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 102, 255, 0.67);\r\n    -moz-box-shadow: 0px 0px 30px 0px rgba(0, 102, 255, 0.67);\r\n    box-shadow: 0px 0px 30px 0px rgba(0, 102, 255, 0.67); */\r\n}\r\nlabel > img {\r\n    height: 70px;\r\n}\r\nh1{\r\n    color: red;\r\n}\r\nlabel>img:hover {\r\n    border-radius: 100%;\r\n    -webkit-box-shadow: 0px 0px 30px 6px rgba(0, 255, 0, 0.67);\r\n    box-shadow: 0px 0px 30px 6px rgba(0, 255, 0, 0.67);\r\n}\r\n.project {\r\n    height: 250px;\r\n    width: 400px;\r\n    border: 1px solid black;\r\n    margin: auto;\r\n    padding: auto;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n\n  <img id=\"me\" src=\"alex.jpg\">\n  <div id=\"profile\">\n\n      <table>\n        <tr>\n        <th>Email</th>\n        <th>LxDemikz@gmail.com</th>\n      </tr>\n      <tr>\n        <th>Github</th>\n        <th><a href=\"https://github.com/Akademyx\">\n        <span class=\"color\" >Akademyx's Profile (Linked)</span>\n        </a></th>\n      </tr>\n      <tr>\n        <th>LinkedIn</th>\n        <th><a href=\"https://www.linkedin.com/in/lxtran8501/\">\n          <span class=\"color\" >Alex Tran (Linked)</span>\n        </a></th>\n      </tr>\n    </table>\n   <p id=\"bio\">I am an upcoming software developer with emphasis on web development. My education comes largely from an intense paced bootcamp namely Coding Dojo.</p>\n  </div>\n \n  <div id=\"image_container\">\n  <label>\n    <input type=\"radio\" name=\"fb\" checked=\"checked\" [routerLink]=\"['']\" />\n    <img class='icon' src=\"home.png\" >\n  </label>\n    <label>\n      <input type=\"radio\" name=\"fb\" [routerLink]=\"['js']\"/>\n      <img class='icon' src=\"JavaScript.png\">\n    </label>\n    <label>\n      <input type=\"radio\" name=\"fb\" [routerLink]=\"['python']\"/>\n      <img class='icon' src=\"python.png\">\n    </label>\n    <label>\n      <input type=\"radio\" name=\"fb\" [routerLink]=\"['ruby']\"/>\n      <img class='icon' src=\"RUBY.png\">\n    </label>\n  </div>\n</div>\n<h2>Select a button above for projects!</h2>\n<div id=\"line-break\"></div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// import { trigger, state, style, transition, animate } from '@angular/'
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression"];
        this.word_counter = 0;
        this.character_counter = 0;
        this.msg = '';
        this.updateText = function () {
            _this.msg = _this.words[_this.word_counter][_this.character_counter];
            if ((_this.character_counter) == (_this.words[_this.word_counter].length + 1)) {
                _this.word_counter++; //choose a different word
                _this.character_counter = 0; //start over with the first character of the word
                _this.msg = ''; //set the html to be blank
                //if we're displaying the last word, go back to the first word
                if (_this.word_counter == _this.words.length)
                    _this.word_counter = 0;
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [],
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// $interval(this.updateText,200)


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var js_component_component_1 = __webpack_require__("./src/app/js-component/js-component.component.ts");
var python_component_component_1 = __webpack_require__("./src/app/python-component/python-component.component.ts");
var ruby_component_component_1 = __webpack_require__("./src/app/ruby-component/ruby-component.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                js_component_component_1.JsComponentComponent,
                python_component_component_1.PythonComponentComponent,
                ruby_component_component_1.RubyComponentComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font-family: \"Wallpoet\";\r\n    font-size: 100px;\r\n    color:green;\r\n    text-shadow: 0 0 3px rgb(45, 228, 38),\r\n    0 0 5px rgb(11, 11, 209);\r\n\r\n}\r\n\r\nimg {\r\n    width: 120px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Languages and Tools</h1>\n<div id=\"container\">\n  <img src=\"/assets/js2.png\" alt=\"#\">\n  <img src=\"/assets/ruby.jpg\" alt=\"#\">\n  <img src=\"/assets/python.png\" alt=\"#\">\n  <img src=\"/assets/angular.png\" alt=\"#\">\n  <img src=\"/assets/mongodb.png\" alt=\"#\">\n  <img src=\"/assets/django.png\" alt=\"#\">\n  <img src=\"/assets/flask.png\" alt=\"#\">\n  <img src=\"/assets/socketio.png\" alt=\"#\">\n  <img src=\"/assets/mysql.png\" alt=\"#\">\n  <img src=\"/assets/rubyor.png\" alt=\"#\">\n  <img src=\"/assets/sqlite.png\" alt=\"#\">\n  <img src=\"/assets/jQuery.png\" alt=\"#\">\n  <img src=\"/assets/bootstrap.png\" alt=\"#\">\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/js-component/js-component.component.css":
/***/ (function(module, exports) {

module.exports = "*, body{\r\n    text-align: center;\r\n}\r\n.project {\r\n    height: 300px;\r\n    width: 700px;\r\n    border: 1px solid black;\r\n    margin: 15px;\r\n    padding: 0px 0px 0px 0px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    background:-webkit-gradient(linear,left top, left bottom,from(cyan),to(lightskyblue));\r\n    background:linear-gradient(cyan,lightskyblue);\r\n\r\n}\r\n.project > .project_gif {\r\n    display: inline-block;\r\n    width: 450px;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 0px;\r\n    border-radius: inherit;\r\n    vertical-align: top;\r\n}\r\n.project > .project_data {\r\n    display: inline-block;\r\n    width: 237px;\r\n    height: -webkit-fill-available;\r\n    padding: 4px;\r\n    margin: 0px 0px 0px 0px;\r\n    /* background-color: green; */\r\n    /* border-radius: inherit; */\r\n    border-left: 1px solid black;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgb(220, 243, 14)), to(rgb(41, 41, 5)));\r\n    background: linear-gradient(rgb(220, 243, 14), rgb(41, 41, 5));\r\n    text-align:left;\r\n}\r\n/* .project:hover .description_icon{\r\n    height: 100px; */\r\n/* background:linear-gradient( red, whitesmoke); */\r\n/* } */\r\n/* .project:hover{\r\n    background: linear-gradient(grey, whitesmoke);\r\n    opacity: 0.3;\r\n} */\r\nimg {\r\n    width:100%;\r\n}\r\n.project_data > img {\r\n    width: 50px;\r\n}\r\n#project2 {\r\n    background-image: url(\"/assets/ledger.gif\");\r\n    width:100%;\r\n    height:100%;\r\n    background-repeat: no-repeat;\r\n}\r\n#unavailable{\r\n    text-align:center;\r\n    margin:auto auto;\r\n    width: 50%;\r\n    vertical-align: middle;\r\n    /* background-color: red; */\r\n    margin-top: 17%;\r\n}\r\n#unavailable > h2 {\r\n    font-family: 'Sofia';\r\n    font-size: 40px;\r\n    color: #FF0000;\r\n    text-shadow: 2px 2px 8px goldenrod;\r\n}\r\nh1 {\r\n    font-family: \"Bungee\";\r\n    font-size: 22px;\r\n    color: yellow;\r\n    text-shadow: 2px 2px 4px #000000;\r\n}\r\ndiv > h4 {\r\n    font-family: \"Coda Caption\";\r\n    font-size: 16pt;\r\n    margin: 10px;\r\n    text-shadow: 0 1px 0 #ccc,\r\n            0 2px 0 #c9c9c9,\r\n            0 3px 0 #bbb,\r\n            0 4px 0 #b9b9b9,\r\n            0 5px 0 #aaa,\r\n            0 6px 1px rgba(0,0,0,.1),\r\n            0 0 5px rgba(0,0,0,.1),\r\n            0 1px 3px rgba(0,0,0,.3),\r\n            0 3px 5px rgba(0,0,0,.2),\r\n            0 5px 10px rgba(0,0,0,.25),\r\n            0 10px 10px rgba(0,0,0,.2),\r\n            0 20px 20px rgba(0,0,0,.15);\r\n}\r\ndiv > p {\r\n    font-family: \"Concert One\";\r\n    font-size: 12pt;\r\n    margin: auto;\r\n    color: white;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/js-component/js-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>JavaScript Projects</h1>\n\n\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/ledger2.gif\" alt=\"#\" *ngIf=\"!one.isHovering\">\n  </div>\n  <div class=\"project_data\">\n    <h4>Ledger</h4>\n    <p>Ledger is built to simulate the use of an actual ledger, keeping record of purchases made, and sold.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n    <img class=\"description_icon\" src=\"/assets/nodeJs.png\">\n    <img class=\"description_icon\" src=\"/assets/angular.png\">\n    <img class=\"description_icon\" src=\"/assets/mongodb.png\">\n    \n  </div>\n</div>\n\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/1942.gif\" alt=\"#\" >\n  </div>\n  <div class=\"project_data\">\n    <h4>1942</h4>\n    <p>1942 is a classic arcade game, which this is built with basics of only three technologies.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n   \n  </div>\n</div>\n\n<div class=\"project\">\n  <div id=\"unavailable\">\n    <h2>Coming Soon!</h2>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/js-component/js-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var JsComponentComponent = /** @class */ (function () {
    function JsComponentComponent() {
        // isHovering= false;
        this.one = {
            isHovering: false
        };
        this.two = {
            isHovering: false
        };
        this.three = {
            isHovering: false
        };
        this.projects = [this.one, this.two, this.three];
    }
    JsComponentComponent.prototype.ngOnInit = function () {
    };
    // hover(num){
    //   if(this.isHovering == false){
    //     this.isHovering = true;
    //   } else {
    //     this.isHovering = false
    //   }
    // }
    JsComponentComponent.prototype.hover = function (num) {
        if (this.projects[num].isHovering == false) {
            this.projects[num].isHovering = true;
        }
        else {
            this.projects[num].isHovering = false;
        }
    };
    JsComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-js-component',
            template: __webpack_require__("./src/app/js-component/js-component.component.html"),
            styles: [__webpack_require__("./src/app/js-component/js-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JsComponentComponent);
    return JsComponentComponent;
}());
exports.JsComponentComponent = JsComponentComponent;


/***/ }),

/***/ "./src/app/python-component/python-component.component.css":
/***/ (function(module, exports) {

module.exports = "*, body{\r\n    text-align: center;\r\n}\r\n.project {\r\n    height: 300px;\r\n    width: 700px;\r\n    border: 1px solid black;\r\n    margin: 15px;\r\n    padding: 0px 0px 0px 0px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    background:-webkit-gradient(linear,left top, left bottom,from(cyan),to(lightskyblue));\r\n    background:linear-gradient(cyan,lightskyblue);\r\n\r\n}\r\n.project > .project_gif {\r\n    display: inline-block;\r\n    width: 450px;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 0px;\r\n    border-radius: inherit;\r\n    vertical-align: top;\r\n}\r\n.project > .project_data {\r\n    display: inline-block;\r\n    width: 237px;\r\n    height: -webkit-fill-available;\r\n    padding: 4px;\r\n    margin: 0px 0px 0px 0px;\r\n    /* background-color: green; */\r\n    /* border-radius: inherit; */\r\n    border-left: 1px solid black;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#1f1a70), to(rgb(221, 221, 39)));\r\n    background: linear-gradient(#1f1a70, rgb(221, 221, 39));\r\n    text-align:left;\r\n}\r\n/* .project:hover .description_icon{\r\n    height: 100px; */\r\n/* background:linear-gradient( red, whitesmoke); */\r\n/* } */\r\n/* .project:hover{\r\n    background: linear-gradient(grey, whitesmoke);\r\n    opacity: 0.3;\r\n} */\r\nimg {\r\n    width:100%;\r\n}\r\n.project_data > img {\r\n    width: 50px;\r\n}\r\n#project2 {\r\n    background-image: url(\"/assets/ledger.gif\");\r\n    width:100%;\r\n    height:100%;\r\n    background-repeat: no-repeat;\r\n}\r\n#unavailable{\r\n    text-align:center;\r\n    margin:auto auto;\r\n    width: 50%;\r\n    vertical-align: middle;\r\n    /* background-color: red; */\r\n    margin-top: 17%;\r\n}\r\n#unavailable > h2 {\r\n    font-family: 'Sofia';\r\n    font-size: 40px;\r\n    color: #FF0000;\r\n    text-shadow: 2px 2px 8px goldenrod;\r\n}\r\nh1 {\r\n    font-family: \"Bungee\";\r\n    font-size: 22px;\r\n    color: rgb(39, 24, 170);\r\n    text-shadow: 2px 2px 4px #daff08;\r\n}\r\ndiv > h4 {\r\n    font-family: \"Coda Caption\";\r\n    font-size: 16pt;\r\n    margin: 10px;\r\n    text-shadow: 0 1px 0 #ccc,\r\n            0 2px 0 #c9c9c9,\r\n            0 3px 0 #bbb,\r\n            0 4px 0 #b9b9b9,\r\n            0 5px 0 #aaa,\r\n            0 6px 1px rgba(0,0,0,.1),\r\n            0 0 5px rgba(0,0,0,.1),\r\n            0 1px 3px rgba(0,0,0,.3),\r\n            0 3px 5px rgba(0,0,0,.2),\r\n            0 5px 10px rgba(0,0,0,.25),\r\n            0 10px 10px rgba(0,0,0,.2),\r\n            0 20px 20px rgba(0,0,0,.15);\r\n}\r\ndiv > p {\r\n    font-family: \"Concert One\";\r\n    font-size: 12pt;\r\n    margin: auto;\r\n    color: white;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/python-component/python-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Python Projects</h1>\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/goldfarm.gif\" alt=\"#\">\n  </div>\n  <div class=\"project_data\">\n    <h4>Gold Farm</h4>\n    <p>Gold Farm is to simulate use of a game.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/python.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n    <img class=\"description_icon\" src=\"/assets/mysql.png\">\n    <img class=\"description_icon\" src=\"/assets/django.png\">\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n\n  </div>\n</div>\n\n<div class=\"project\">\n  <div id=\"unavailable\">\n    <h2>Coming Soon!</h2>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/python-component/python-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PythonComponentComponent = /** @class */ (function () {
    function PythonComponentComponent() {
    }
    PythonComponentComponent.prototype.ngOnInit = function () {
    };
    PythonComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-python-component',
            template: __webpack_require__("./src/app/python-component/python-component.component.html"),
            styles: [__webpack_require__("./src/app/python-component/python-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PythonComponentComponent);
    return PythonComponentComponent;
}());
exports.PythonComponentComponent = PythonComponentComponent;


/***/ }),

/***/ "./src/app/ruby-component/ruby-component.component.css":
/***/ (function(module, exports) {

module.exports = "*, body{\r\n    text-align: center;\r\n}\r\n.project {\r\n    height: 300px;\r\n    width: 700px;\r\n    border: 1px solid black;\r\n    margin: 15px;\r\n    padding: 0px 0px 0px 0px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n    background:-webkit-gradient(linear,left top, left bottom,from(cyan),to(lightskyblue));\r\n    background:linear-gradient(cyan,lightskyblue);\r\n\r\n}\r\n.project > .project_gif {\r\n    display: inline-block;\r\n    width: 450px;\r\n    margin: 0px 0px 0px 0px;\r\n    padding: 0px;\r\n    border-radius: inherit;\r\n    vertical-align: top;\r\n}\r\n.project > .project_data {\r\n    display: inline-block;\r\n    width: 237px;\r\n    height: -webkit-fill-available;\r\n    padding: 4px;\r\n    margin: 0px 0px 0px 0px;\r\n    /* background-color: green; */\r\n    /* border-radius: inherit; */\r\n    border-left: 1px solid black;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgb(104, 11, 11)), to(rgb(95, 95, 7)));\r\n    background: linear-gradient(rgb(104, 11, 11), rgb(95, 95, 7));\r\n    text-align:left;\r\n}\r\n/* .project:hover .description_icon{\r\n    height: 100px; */\r\n/* background:linear-gradient( red, whitesmoke); */\r\n/* } */\r\n/* .project:hover{\r\n    background: linear-gradient(grey, whitesmoke);\r\n    opacity: 0.3;\r\n} */\r\nimg {\r\n    width:100%;\r\n}\r\n.project_data > img {\r\n    width: 50px;\r\n}\r\n#project2 {\r\n    background-image: url(\"/assets/ledger.gif\");\r\n    width:100%;\r\n    height:100%;\r\n    background-repeat: no-repeat;\r\n}\r\n#unavailable{\r\n    text-align:center;\r\n    margin:auto auto;\r\n    width: 50%;\r\n    vertical-align: middle;\r\n    /* background-color: red; */\r\n    margin-top: 17%;\r\n}\r\n#unavailable > h2 {\r\n    font-family: 'Sofia';\r\n    font-size: 40px;\r\n    color: #FF0000;\r\n    text-shadow: 2px 2px 8px goldenrod;\r\n}\r\nh1 {\r\n    font-family: \"Bungee\";\r\n    font-size: 22px;\r\n    color: rgb(255, 0, 0);\r\n    text-shadow:\r\n    -1px -1px 0 rgb(255, 255, 255),\r\n    1px -1px 0 rgb(255, 255, 255),\r\n    -1px 1px 0 rgb(255, 255, 255),\r\n    1px 1px 0 rgb(255, 255, 255);  \r\n}\r\ndiv > h4 {\r\n    font-family: \"Coda Caption\";\r\n    font-size: 16pt;\r\n    margin: 10px;\r\n    text-shadow: 0 1px 0 #ccc,\r\n            0 2px 0 #c9c9c9,\r\n            0 3px 0 #bbb,\r\n            0 4px 0 #b9b9b9,\r\n            0 5px 0 #aaa,\r\n            0 6px 1px rgba(0,0,0,.1),\r\n            0 0 5px rgba(0,0,0,.1),\r\n            0 1px 3px rgba(0,0,0,.3),\r\n            0 3px 5px rgba(0,0,0,.2),\r\n            0 5px 10px rgba(0,0,0,.25),\r\n            0 10px 10px rgba(0,0,0,.2),\r\n            0 20px 20px rgba(0,0,0,.15);\r\n}\r\ndiv > p {\r\n    font-family: \"Concert One\";\r\n    font-size: 12pt;\r\n    margin: auto;\r\n    color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/ruby-component/ruby-component.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Ruby Projects</h1>\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/membership.gif\" alt=\"#\">\n  </div>\n  <div class=\"project_data\">\n    <h4>Membership</h4>\n    <p>Membership simulates a membership service that you would see typically anywhere.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n    <img class=\"description_icon\" src=\"/assets/ruby.jpg\">\n    <img class=\"description_icon\" src=\"/assets/rubyor.png\">\n    <img class=\"description_icon\" src=\"/assets/sqlite.png\">\n\n  </div>\n</div>\n\n\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/playlist.gif\" alt=\"#\">\n  </div>\n  <div class=\"project_data\">\n    <h4>Playlist</h4>\n    <p>Playlist is straight forward with what this is. A list of details of songs.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n    <img class=\"description_icon\" src=\"/assets/ruby.jpg\">\n    <img class=\"description_icon\" src=\"/assets/rubyor.png\">\n    <img class=\"description_icon\" src=\"/assets/sqlite.png\">\n\n  </div>\n</div>\n\n<div class=\"project\">\n  <div class=\"project_gif\">\n    <img src=\"/assets/wishlist.gif\" alt=\"#\">\n  </div>\n  <div class=\"project_data\">\n    <h4>Wishlist</h4>\n    <p>Wishlist utilized in most online retails.</p>\n    <h4>Technologies:</h4>\n\n    <img class=\"description_icon\" src=\"/assets/js2.png\">\n    <img class=\"description_icon\" src=\"/assets/html.png\">\n    <img class=\"description_icon\" src=\"/assets/css.png\">\n    <img class=\"description_icon\" src=\"/assets/ruby.jpg\">\n    <img class=\"description_icon\" src=\"/assets/rubyor.png\">\n    <img class=\"description_icon\" src=\"/assets/sqlite.png\">\n\n  </div>\n</div>\n\n<div class=\"project\">\n  <div id=\"unavailable\">\n    <h2>Coming Soon!</h2>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ruby-component/ruby-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var RubyComponentComponent = /** @class */ (function () {
    function RubyComponentComponent() {
    }
    RubyComponentComponent.prototype.ngOnInit = function () {
    };
    RubyComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-ruby-component',
            template: __webpack_require__("./src/app/ruby-component/ruby-component.component.html"),
            styles: [__webpack_require__("./src/app/ruby-component/ruby-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RubyComponentComponent);
    return RubyComponentComponent;
}());
exports.RubyComponentComponent = RubyComponentComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map