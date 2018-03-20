webpackJsonp([9],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        if (this.authService.getActiveUser()) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
    };
    SettingsPage.prototype.onGoToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SettingsPage.prototype.onGoToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    SettingsPage.prototype.onSignOut = function () {
        this.authService.signOut();
        this.navCtrl.popToRoot();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\settings\settings.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button block (click)="onGoToSignUp()" *ngIf="!isAuthenticated">\n\n      Sign Up\n\n    </button>\n\n    <button ion-button block outline (click)="onGoToSignIn()" *ngIf="!isAuthenticated">\n\n      Sign In\n\n    </button>\n\n    <button ion-button block (click)="onSignOut()" *ngIf="isAuthenticated">\n\n      Sign Out\n\n    </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendors_vendors__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_shopping__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restaurants_restaurants__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entertainment_entertainment__ = __webpack_require__(289);
=======
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AttractionsPage = (function () {
    function AttractionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AttractionsPage.prototype.onGoToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */]);
    };
    AttractionsPage.prototype.onGoToVendors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__vendors_vendors__["a" /* VendorsPage */]);
    };
    AttractionsPage.prototype.onGoToShopping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__shopping_shopping__["a" /* ShoppingPage */]);
    };
    AttractionsPage.prototype.onGoToRestaurants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__restaurants_restaurants__["a" /* RestaurantsPage */]);
    };
    AttractionsPage.prototype.onGoToEntertainment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__entertainment_entertainment__["a" /* EntertainmentPage */]);
    };
    AttractionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attractions',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\attractions\attractions.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n		Attractions\n\n	</ion-title>\n\n	\n\n	<ion-buttons end>\n\n		<button ion-button icon-only clear (click)="onGoToSettings()">\n\n			<ion-icon name="options">\n\n			</ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<p>\n\n		<button ion-button block (click)="onGoToVendors()">VENDORS</button>\n\n	</p>\n\n	<p>\n\n		<button ion-button block (click)="onGoToRestaurants()">RESTAURANTS</button>\n\n	</p>\n\n	<p>\n\n		<button ion-button block (click)="onGoToShopping()">SHOPPING</button>\n\n	</p>\n\n	<p>\n\n		<button ion-button block (click)="onGoToEntertainment()">ENTERTAINMENT</button>\n\n	</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\attractions\attractions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AttractionsPage);
    return AttractionsPage;
}());

//# sourceMappingURL=attractions.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FollowriderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowriderPage = (function () {
    function FollowriderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowriderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowriderPage');
    };
    FollowriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-followrider',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\followrider\followrider.html"*/'<!--\n\n  Generated template for the FollowriderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>FOLLOW RIDER</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\followrider\followrider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FollowriderPage);
    return FollowriderPage;
}());

//# sourceMappingURL=followrider.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FollowriderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowriderPage = (function () {
    function FollowriderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowriderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowriderPage');
    };
    FollowriderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Map</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\map\map.html"*/,
=======
            selector: 'page-followrider',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/followrider/followrider.html"*/'<!--\n  Generated template for the FollowriderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FOLLOW RIDER</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/followrider/followrider.html"*/,
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FollowriderPage);
    return FollowriderPage;
}());

//# sourceMappingURL=followrider.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = (function () {
    function SchedulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-schedule',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\schedule\schedule.html"*/'<!--\n\n  Generated template for the SchedulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Schedule</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <h1>FIRST DAY OF 2018 HHH ACTIVITIES</h1>\n\n    <h2>THURSDAY, AUGUST 23, 2018</h2>\n\n    \n\n    <ion-card>\n\n        <ion-card-header>\n\n            3:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            The Consumer Show opens in the Exhibit Hall of the Multi-Purpose Events Center.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            3:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Sports Massage at MPEC\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            4:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Packet Pickup and late registration open at the Exhibit Hall.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            4:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            USA Cycling race registration begins in the Exhibit Hall.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            4:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Wee-Chi-Tah Off-Road events registration begins at the Exhibit Hall.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            8:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            All Activities close.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <h1>THE CELEBRATION BEGINS</h1>\n\n    <h2>FRIDAY, AUGUST 24, 2018</h2>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            9:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Wee-Chi-Tah Off-Road Trail Run registration opens - Bridwell Ag Center.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            10:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Wee-Chi-Tah Off-Road Mountain Bike Trail Races begin – Bridwell Ag Center.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            1:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Consumer Show begins.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            1:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Sports Massage at MPEC. Loosen up for the day ahead.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            2:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Packet Pickup and late registration open in the Exhibit Hall for Ride and Race participants.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            3:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Finish Line Village Opens.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Criterium for USA Cycling racers begins at the Finish Line Village.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:00 PM - 7:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Great races to watch from MPEC parking & East steps of the Coliseum.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:30 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Spaghetti Dinner Begins in the lower level of the Coliseum.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Start Smart/Ride Smart “How to have a successful ride at the HHH” Presented by Bikin’ Mike Keel – Author of “Train Smart” - MPEC Seminar Room\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            8:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            HHH Pace Group Meeting - MPEC Seminar Room\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            8:45 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Race Official’s Meeting – HHH Bldg – 104 Scott St. (USA Cycling Officials and invited guests only).\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            9:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Spaghetti Dinner closes.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            10:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Consumer Show, Finish Line Village, Registrations, and Packet Pickup Close.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h1>THE HEAT IS ON! THE \'RIDE\' AND \'ROAD RACES\' BEGIN</h1>\n\n    <h2>SATURDAY, AUGUST 25, 2018</h2>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Breakfast offered by Spectra Food & Hospitality - lower level of the Coliseum.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Packet Pickup and Late Registration in the Exhibit Hall. (USA Cycling racers - no registration)\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:30 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Morning Praise and Worship (3rd and Lamar)\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            6:45 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            First Bank - USA Cycling Road Races begin at Lincoln St and Burkburnett Rd.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Registration for the Ride closes.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:05 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Flyover\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:05 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Cannon Blast and the official start of the Endurance ride for 100 miler riders, 100k, 50mile, 25mile and 10k routes (Tandems & Recumbents start at 2nd Street)\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            8:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Finish Line Village & Food Court opens at 2nd and Lamar.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            9:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            The Consumer Show Opens.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            9:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Sports Massage at the Consumer Show opens.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            10:15 AM - 3:30 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Outdoor Concert at 2nd and Lamar. Bands: TBD\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            11:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            First Bank Road Races finish. Awards will be presented around 12 Noon (based on category completion time) on the Finish Line Village Concert Stage.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            4:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Consumer Show Closes.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            5:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Finish Line Village & Outdoor Concert closes \n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:00 PM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n           All activities close.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <h1>WRAP UP THE TRIPLE THREAT</h1>\n\n    <h2>SUNDAY, AUGUST 26, 2018</h2>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Wee-Chi-Tah Off-Road Trail Run, 10k, and Half Marathon Distances.\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card>\n\n        <ion-card-header>\n\n            7:00 AM\n\n        </ion-card-header>\n\n        \n\n        <ion-card-content>\n\n            Criterium Races for USAC licensed racers begin in front of the Multi Purpose Events Center\n\n        </ion-card-content>\n\n    </ion-card>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\schedule\schedule.html"*/,
=======
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/schedule/schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>FIRST DAY OF 2018 HHH ACTIVITIES</h1>\n    <h2>THURSDAY, AUGUST 23, 2018</h2>\n    \n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            The Consumer Show opens in the Exhibit Hall of the Multi-Purpose Events Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at MPEC\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and late registration open at the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            USA Cycling race registration begins in the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road events registration begins at the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            All Activities close.\n        </ion-card-content>\n    </ion-card>\n    \n    <h1>THE CELEBRATION BEGINS</h1>\n    <h2>FRIDAY, AUGUST 24, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Trail Run registration opens - Bridwell Ag Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Mountain Bike Trail Races begin – Bridwell Ag Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            1:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show begins.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            1:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at MPEC. Loosen up for the day ahead.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            2:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and late registration open in the Exhibit Hall for Ride and Race participants.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village Opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Criterium for USA Cycling racers begins at the Finish Line Village.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM - 7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Great races to watch from MPEC parking & East steps of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:30 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Spaghetti Dinner Begins in the lower level of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Start Smart/Ride Smart “How to have a successful ride at the HHH” Presented by Bikin’ Mike Keel – Author of “Train Smart” - MPEC Seminar Room\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            HHH Pace Group Meeting - MPEC Seminar Room\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:45 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Race Official’s Meeting – HHH Bldg – 104 Scott St. (USA Cycling Officials and invited guests only).\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Spaghetti Dinner closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show, Finish Line Village, Registrations, and Packet Pickup Close.\n        </ion-card-content>\n    </ion-card>\n    <h1>THE HEAT IS ON! THE \'RIDE\' AND \'ROAD RACES\' BEGIN</h1>\n    <h2>SATURDAY, AUGUST 25, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            5:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Breakfast offered by Spectra Food & Hospitality - lower level of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and Late Registration in the Exhibit Hall. (USA Cycling racers - no registration)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:30 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Morning Praise and Worship (3rd and Lamar)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            6:45 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            First Bank - USA Cycling Road Races begin at Lincoln St and Burkburnett Rd.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Registration for the Ride closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:05 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Flyover\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:05 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Cannon Blast and the official start of the Endurance ride for 100 miler riders, 100k, 50mile, 25mile and 10k routes (Tandems & Recumbents start at 2nd Street)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village & Food Court opens at 2nd and Lamar.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            The Consumer Show Opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at the Consumer Show opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:15 AM - 3:30 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Outdoor Concert at 2nd and Lamar. Bands: TBD\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            11:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            First Bank Road Races finish. Awards will be presented around 12 Noon (based on category completion time) on the Finish Line Village Concert Stage.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show Closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village & Outdoor Concert closes \n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n           All activities close.\n        </ion-card-content>\n    </ion-card>\n    <h1>WRAP UP THE TRIPLE THREAT</h1>\n    <h2>SUNDAY, AUGUST 26, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Trail Run, 10k, and Half Marathon Distances.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Criterium Races for USAC licensed racers begin in front of the Multi Purpose Events Center\n        </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/schedule/schedule.html"*/,
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

<<<<<<< HEAD
/***/ 156:
=======
/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MapPage');
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row justify-content-between text-center>\n        <ion-col>70</ion-col>\n        <ion-col>NE</ion-col>\n        <ion-col>5 mph</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 155:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
=======
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 196:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attractions/attractions.module": [
<<<<<<< HEAD
		450,
		8
	],
	"../pages/entertainment/entertainment.module": [
		451,
		7
	],
	"../pages/example/example.module": [
		452,
		0
	],
	"../pages/followrider/followrider.module": [
		453,
		6
	],
	"../pages/map/map.module": [
		455,
		5
	],
	"../pages/restaurants/restaurants.module": [
		454,
		4
	],
	"../pages/schedule/schedule.module": [
		456,
		3
	],
	"../pages/shopping/shopping.module": [
		457,
		2
	],
	"../pages/vendors/vendors.module": [
		458,
		1
=======
		449,
		3
	],
	"../pages/followrider/followrider.module": [
		450,
		2
	],
	"../pages/map/map.module": [
		452,
		1
	],
	"../pages/schedule/schedule.module": [
		451,
		0
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
<<<<<<< HEAD
webpackAsyncContext.id = 197;
=======
webpackAsyncContext.id = 196;
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = (function () {
    function SignupPage(navCtrl, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SignupPage.prototype.onSignUp = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up'
        });
        loading.present();
        this.authService.signUp(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
            _this.navCtrl.popToRoot();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sign Up Failed',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
            _this.navCtrl.pop();
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\signup\signup.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="onSignUp(f)">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="email" ngModel name="email" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" ngModel name="password" required [minlength]="6"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block type="submit" [disabled]="!f.valid">Sign Up</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninPage = (function () {
    function SigninPage(navCtrl, authService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
    }
    SigninPage.prototype.onSignIn = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in',
        });
        loading.present();
        this.authService.signIn(form.value.email, form.value.password)
            .then(function (data) {
            loading.dismiss();
            _this.navCtrl.popToRoot();
        })
            .catch(function (error) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Sign in failed',
                message: error.message,
                buttons: ['Ok']
            });
            alert.present();
            _this.navCtrl.pop();
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\signin\signin.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sign In</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="onSignIn(f)">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label fixed>Email</ion-label>\n\n        <ion-input type="email" ngModel name="email" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" ngModel name="password" required></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block type="submit" [disabled]="!f.valid">Sign In</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 285:
=======
/***/ 282:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attractions_attractions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followrider_followrider__ = __webpack_require__(144);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attractions_attractions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followrider_followrider__ = __webpack_require__(143);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.isAuthenticated = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        if (this.authService.getActiveUser()) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
    };
    HomePage.prototype.onGoToSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.onGoToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.onGoToFollowRider = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__followrider_followrider__["a" /* FollowriderPage */]);
    };
    HomePage.prototype.onGoToSchedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
    };
    HomePage.prototype.onGoToAttractions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__attractions_attractions__["a" /* AttractionsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Hotter\'n Hell Hundred\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear (click)="onGoToSettings()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <button ion-button block (click)="onGoToMap()" *ngIf="isAuthenticated">MAP</button>\n\n    <button ion-button block (click)="onGoToFollowRider()" *ngIf="!isAuthenticated">FOLLOW RIDER</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button block (click)="onGoToSchedule()">SCHEDULE OF EVENTS</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button block (click)="onGoToAttractions()">ATTRACTIONS</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button block outline>93 DAYS | 17 HRS | 32 MIN | 18 SEC</button>\n\n  </p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\home\home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-buttons end>\n    <button ion-button icon-only clear (click)="onGoToSettings()">\n      <ion-icon name="more"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-between text-center>\n      <ion-col>\n        <img src="assets/imgs/logo.png" alt="Hotter n\' Hell Logo" />\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p>\n    <button ion-button block (click)="onGoToMap()" *ngIf="isAuthenticated">MAP</button>\n    <button ion-button block (click)="onGoToFollowRider()" *ngIf="!isAuthenticated">FOLLOW RIDER</button>\n  </p>\n  <p>\n    <button ion-button block (click)="onGoToSchedule()">SCHEDULE OF EVENTS</button>\n  </p>\n  <p>\n    <button ion-button block (click)="onGoToAttractions()">ATTRACTIONS</button>\n  </p>\n  <p>\n    <button ion-button block outline>93 DAYS | 17 HRS | 32 MIN | 18 SEC</button>\n  </p>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row justify-content-between text-center>\n        <ion-col>70</ion-col>\n        <ion-col>NE</ion-col>\n        <ion-col>5 mph</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/home/home.html"*/
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 286:
=======
/***/ 283:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_number_settings_number__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_route_settings_route__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_location_settings_location__ = __webpack_require__(288);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD
/**
 * Generated class for the VendorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VendorsPage = (function () {
    function VendorsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VendorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vendors',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\vendors\vendors.html"*/'<!--\n\n  Generated template for the VendorsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>vendors</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\vendors\vendors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VendorsPage);
    return VendorsPage;
=======







var SettingsPage = (function () {
    function SettingsPage(navCtrl, authService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.isAuthenticated = false;
    }
    SettingsPage.prototype.ionViewWillEnter = function () {
        if (this.authService.getActiveUser()) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
    };
    SettingsPage.prototype.changeRiderNumber = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__settings_number_settings_number__["a" /* SettingsNumberPage */]);
        modal.present();
    };
    SettingsPage.prototype.changeRoute = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__settings_route_settings_route__["a" /* SettingsRoutePage */]);
        modal.present();
    };
    SettingsPage.prototype.changeLocation = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__settings_location_settings_location__["a" /* SettingsLocationPage */]);
        modal.present();
    };
    SettingsPage.prototype.onGoToSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SettingsPage.prototype.onGoToSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    SettingsPage.prototype.onSignOut = function () {
        this.authService.signOut();
        this.navCtrl.popToRoot();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines *ngIf="isAuthenticated">\n    <button ion-item (click)="changeRiderNumber()">\n      Rider Number\n      <ion-badge item-end>296</ion-badge>\n    </button>\n    <button ion-item (click)="changeRoute()">\n      <ion-label>Route</ion-label>\n      <ion-badge item-end>100 K</ion-badge>>\n    </button>\n    <button ion-item (click)="changeLocation()">\n      <ion-label>Location</ion-label>\n      <ion-checkbox checked="true" disabled="true" item-end></ion-checkbox>\n    </button>\n  </ion-list>\n\n  <button ion-button block (click)="onGoToSignUp()" *ngIf="!isAuthenticated">\n    Sign Up\n  </button>\n  <button ion-button block outline (click)="onGoToSignIn()" *ngIf="!isAuthenticated">\n    Sign In\n  </button>\n  <button ion-button block (click)="onSignOut()" *ngIf="isAuthenticated">\n    Sign Out\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SettingsPage);
    return SettingsPage;
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
}());

//# sourceMappingURL=vendors.js.map

/***/ }),

<<<<<<< HEAD
/***/ 287:
=======
/***/ 284:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingPage = (function () {
    function ShoppingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShoppingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingPage');
    };
    ShoppingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\shopping\shopping.html"*/'<!--\n\n  Generated template for the ShoppingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n		Stores\n\n	</ion-title>\n\n	\n\n	<ion-buttons end>\n\n		<button ion-button icon-only clear (click)="onGoToSettings()">\n\n			<ion-icon name="options">\n\n			</ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\shopping\shopping.html"*/,
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ShoppingPage);
    return ShoppingPage;
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

<<<<<<< HEAD
/***/ 288:
=======
/***/ 285:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantsPage = (function () {
    function RestaurantsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantsPage');
    };
    RestaurantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurants',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\restaurants\restaurants.html"*/'<!--\n\n  Generated template for the RestaurantsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n		Restaurants\n\n	</ion-title>\n\n	\n\n	<ion-buttons end>\n\n		<button ion-button icon-only clear (click)="onGoToSettings()">\n\n			<ion-icon name="options">\n\n			</ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\restaurants\restaurants.html"*/,
        }),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RestaurantsPage);
    return RestaurantsPage;
=======
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
}());

//# sourceMappingURL=restaurants.js.map

/***/ }),

<<<<<<< HEAD
/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentPage; });
=======
/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNumberPage; });
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD
/**
 * Generated class for the EntertainmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EntertainmentPage = (function () {
    function EntertainmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EntertainmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EntertainmentPage');
    };
    EntertainmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entertainment',template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\pages\entertainment\entertainment.html"*/'<!--\n\n  Generated template for the EntertainmentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n		Entertainment\n\n	</ion-title>\n\n	\n\n	<ion-buttons end>\n\n		<button ion-button icon-only clear (click)="onGoToSettings()">\n\n			<ion-icon name="options">\n\n			</ion-icon>\n\n		</button>\n\n	</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\pages\entertainment\entertainment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EntertainmentPage);
    return EntertainmentPage;
}());

//# sourceMappingURL=entertainment.js.map

/***/ }),

/***/ 290:
=======
var SettingsNumberPage = (function () {
    function SettingsNumberPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SettingsNumberPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-number',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-number/settings-number.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Rider Number</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n          <span ion-text color="primary" showWhen="ios">Cancel</span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n      <ion-item>\n        <ion-label>Rider Number</ion-label>\n        <ion-input type="number" value="296" clearOnEdit="true" name="rider-number" required></ion-input>>\n      </ion-item>\n      <button ion-button block type="submit" disabled="true">Save</button>\n    </form>\n  </ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-number/settings-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingsNumberPage);
    return SettingsNumberPage;
}());

//# sourceMappingURL=settings-number.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsRoutePage = (function () {
    function SettingsRoutePage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SettingsRoutePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsRoutePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-route',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-route/settings-route.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Route</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list radio-group>\n      <ion-item>\n        <ion-label>100 Mile</ion-label>\n        <ion-radio checked="true" value="100-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>75 Mile</ion-label>\n        <ion-radio checked="false" value="75-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>50 Mile</ion-label>\n        <ion-radio checked="false" value="50-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>25 Mile</ion-label>\n        <ion-radio checked="false" value="25-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>100 Km</ion-label>\n        <ion-radio checked="false" value="100-km"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>10 Km</ion-label>\n        <ion-radio checked="false" value="10-km"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" disabled="true">Save</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-route/settings-route.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingsRoutePage);
    return SettingsRoutePage;
}());

//# sourceMappingURL=settings-route.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsLocationPage = (function () {
    function SettingsLocationPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SettingsLocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-location',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-location/settings-location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Location</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-item>\n      <ion-label>Allow Location</ion-label>\n      <ion-checkbox checked="true" name="allow-location"></ion-checkbox>\n    </ion-item>\n    <button ion-button block type="submit" disabled="true">Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-location/settings-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingsLocationPage);
    return SettingsLocationPage;
}());

//# sourceMappingURL=settings-location.js.map

/***/ }),

/***/ 289:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 314:
=======
/***/ 313:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_attractions_attractions__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_followrider_followrider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__ = __webpack_require__(289);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_attractions_attractions__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_followrider_followrider__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_location_settings_location__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_number_settings_number__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_route_settings_route__ = __webpack_require__(287);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















<<<<<<< HEAD

=======
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_attractions_attractions__["a" /* AttractionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_followrider_followrider__["a" /* FollowriderPage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__["a" /* VendorsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__["a" /* RestaurantsPage */]
=======
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_location_settings_location__["a" /* SettingsLocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_number_settings_number__["a" /* SettingsNumberPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_route_settings_route__["a" /* SettingsRoutePage */]
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/attractions/attractions.module#AttractionsPageModule', name: 'AttractionsPage', segment: 'attractions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entertainment/entertainment.module#EntertainmentPageModule', name: 'EntertainmentPage', segment: 'entertainment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/example/example.module#ExamplePageModule', name: 'ExamplePage', segment: 'example', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followrider/followrider.module#FollowriderPageModule', name: 'FollowriderPage', segment: 'followrider', priority: 'low', defaultHistory: [] },
<<<<<<< HEAD
                        { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping/shopping.module#ShoppingPageModule', name: 'ShoppingPage', segment: 'shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendors/vendors.module#VendorsPageModule', name: 'VendorsPage', segment: 'vendors', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] }
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_attractions_attractions__["a" /* AttractionsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_followrider_followrider__["a" /* FollowriderPage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__["a" /* VendorsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__["a" /* RestaurantsPage */]
=======
                __WEBPACK_IMPORTED_MODULE_15__pages_settings_location_settings_location__["a" /* SettingsLocationPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_number_settings_number__["a" /* SettingsNumberPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_route_settings_route__["a" /* SettingsRoutePage */]
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_auth__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 449:
=======
/***/ 364:
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(285);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(282);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyDhQk9JWDz-RiT45tlKkzCTbkN5H8YU-FM",
            authDomain: "hh100-a8856.firebaseapp.com",
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Bob\Desktop\hh100mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Bob\Desktop\hh100mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(199);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(240);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.signUp = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signIn = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut();
    };
    AuthService.prototype.getActiveUser = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
    };
    return AuthService;
}());

//# sourceMappingURL=auth.js.map

/***/ })

<<<<<<< HEAD
},[290]);
=======
},[289]);
>>>>>>> 03bb267c82eae418dfa98bd23684463ec38bf75e
//# sourceMappingURL=main.js.map