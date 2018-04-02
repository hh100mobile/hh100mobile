webpackJsonp([9],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_settings__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsService = (function () {
    function SettingsService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SettingsService.prototype.setNumber = function (num) {
        this.settings.num = num;
        console.log(this.settings.num);
    };
    SettingsService.prototype.setRoute = function (route) {
        this.settings.route = route;
        console.log(this.settings.route);
    };
    SettingsService.prototype.setAllowLocation = function (location) {
        this.settings.location = location;
        console.log(this.settings.location);
    };
    SettingsService.prototype.getNumber = function () {
        return this.settings.num;
    };
    SettingsService.prototype.getRoute = function () {
        return this.settings.route;
    };
    SettingsService.prototype.getAllowLocation = function () {
        return this.settings.location;
    };
    SettingsService.prototype.setNewSettings = function () {
        this.settings = new __WEBPACK_IMPORTED_MODULE_3__models_settings__["a" /* Settings */](0, "none", false);
        console.log(this.settings);
    };
    SettingsService.prototype.storeSettings = function (token) {
        var userId = this.authService.getActiveUser().uid;
        return this.http
            .put('https://hh100-98a6c.firebaseio.com/' + userId + '/settings.json?auth=' + token, this.settings)
            .map(function (response) {
            return response.json();
        });
    };
    SettingsService.prototype.fetchSettings = function (token) {
        var _this = this;
        var userId = this.authService.getActiveUser().uid;
        return this.http.get('https://hh100-98a6c.firebaseio.com/' + userId + '/settings.json?auth=' + token)
            .map(function (response) {
            return response.json();
        })
            .do(function (data) {
            _this.settings = data;
        });
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth__["a" /* AuthService */]) === "function" && _b || Object])
    ], SettingsService);
    return SettingsService;
    var _a, _b;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-entertainment',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/entertainment/entertainment.html"*/'<!--\n  Generated template for the EntertainmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n		Entertainment\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/entertainment/entertainment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EntertainmentPage);
    return EntertainmentPage;
}());

//# sourceMappingURL=entertainment.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttractionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendors_vendors__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_shopping__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurants_restaurants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entertainment_entertainment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__hotels_hotels__ = __webpack_require__(196);
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
    AttractionsPage.prototype.onGoToVendors = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__vendors_vendors__["a" /* VendorsPage */]);
    };
    AttractionsPage.prototype.onGoToHotels = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__hotels_hotels__["a" /* HotelsPage */]);
    };
    AttractionsPage.prototype.onGoToShopping = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shopping_shopping__["a" /* ShoppingPage */]);
    };
    AttractionsPage.prototype.onGoToRestaurants = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurants_restaurants__["a" /* RestaurantsPage */]);
    };
    AttractionsPage.prototype.onGoToEntertainment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__entertainment_entertainment__["a" /* EntertainmentPage */]);
    };
    AttractionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-attractions',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/attractions/attractions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n		Attractions\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<p>\n		<button ion-button block icon-start (click)="onGoToVendors()">\n		<ion-icon name=\'people\' is-active="false"></ion-icon>\n		VENDORS\n		</button>\n	</p>\n	<p>\n		<button ion-button block icon-start (click)="onGoToHotels()">\n		<ion-icon name=\'home\' is-active="false"></ion-icon>\n		HOTELS\n		</button>\n	</p>\n	<p>\n		<button ion-button block icon-start (click)="onGoToRestaurants()">\n		<ion-icon name=\'restaurant\' is-active="false"></ion-icon>\n		RESTAURANTS\n		</button>\n	</p>\n	<p>\n		<button ion-button block icon-start (click)="onGoToShopping()">\n		<ion-icon name=\'cash\' is-active="false"></ion-icon>\n		SHOPPING\n		</button>\n	</p>\n	<p>\n		<button ion-button block icon-start (click)="onGoToEntertainment()">\n		<ion-icon name=\'mic\' is-active="false"></ion-icon>\n		ENTERTAINMENT\n		</button>\n	</p>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/attractions/attractions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AttractionsPage);
    return AttractionsPage;
}());

//# sourceMappingURL=attractions.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-vendors',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/vendors/vendors.html"*/'<!--\n  Generated template for the VendorsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n		Vendors\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/vendors/vendors.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], VendorsPage);
    return VendorsPage;
}());

//# sourceMappingURL=vendors.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-shopping',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/shopping/shopping.html"*/'<!--\n  Generated template for the ShoppingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n		Stores\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/shopping/shopping.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ShoppingPage);
    return ShoppingPage;
}());

//# sourceMappingURL=shopping.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-restaurants',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/restaurants/restaurants.html"*/'<!--\n  Generated template for the RestaurantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n		Restaurants\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/restaurants/restaurants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());

//# sourceMappingURL=restaurants.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HotelsPage = (function () {
    function HotelsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HotelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotelsPage');
    };
    HotelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hotels',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/hotels/hotels.html"*/'<!--\n  Generated template for the HotelsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n	Hotels\n	</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/hotels/hotels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HotelsPage);
    return HotelsPage;
}());

//# sourceMappingURL=hotels.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowriderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-followrider',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/followrider/followrider.html"*/'<!--\n  Generated template for the FollowriderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FOLLOW RIDER</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/followrider/followrider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FollowriderPage);
    return FollowriderPage;
}());

//# sourceMappingURL=followrider.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-schedule',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/schedule/schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Schedule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>FIRST DAY OF 2018 HHH ACTIVITIES</h1>\n    <h2>THURSDAY, AUGUST 23, 2018</h2>\n    \n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            The Consumer Show opens in the Exhibit Hall of the Multi-Purpose Events Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at MPEC\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and late registration open at the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            USA Cycling race registration begins in the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road events registration begins at the Exhibit Hall.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            All Activities close.\n        </ion-card-content>\n    </ion-card>\n    \n    <h1>THE CELEBRATION BEGINS</h1>\n    <h2>FRIDAY, AUGUST 24, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Trail Run registration opens - Bridwell Ag Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Mountain Bike Trail Races begin – Bridwell Ag Center.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            1:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show begins.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            1:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at MPEC. Loosen up for the day ahead.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            2:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and late registration open in the Exhibit Hall for Ride and Race participants.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            3:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village Opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Criterium for USA Cycling racers begins at the Finish Line Village.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM - 7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Great races to watch from MPEC parking & East steps of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:30 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Spaghetti Dinner Begins in the lower level of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Start Smart/Ride Smart “How to have a successful ride at the HHH” Presented by Bikin’ Mike Keel – Author of “Train Smart” - MPEC Seminar Room\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            HHH Pace Group Meeting - MPEC Seminar Room\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:45 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Race Official’s Meeting – HHH Bldg – 104 Scott St. (USA Cycling Officials and invited guests only).\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Spaghetti Dinner closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show, Finish Line Village, Registrations, and Packet Pickup Close.\n        </ion-card-content>\n    </ion-card>\n    <h1>THE HEAT IS ON! THE \'RIDE\' AND \'ROAD RACES\' BEGIN</h1>\n    <h2>SATURDAY, AUGUST 25, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            5:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Breakfast offered by Spectra Food & Hospitality - lower level of the Coliseum.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Packet Pickup and Late Registration in the Exhibit Hall. (USA Cycling racers - no registration)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:30 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Morning Praise and Worship (3rd and Lamar)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            6:45 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            First Bank - USA Cycling Road Races begin at Lincoln St and Burkburnett Rd.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Registration for the Ride closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:05 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Flyover\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:05 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Cannon Blast and the official start of the Endurance ride for 100 miler riders, 100k, 50mile, 25mile and 10k routes (Tandems & Recumbents start at 2nd Street)\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            8:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village & Food Court opens at 2nd and Lamar.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            The Consumer Show Opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            9:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Sports Massage at the Consumer Show opens.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            10:15 AM - 3:30 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Outdoor Concert at 2nd and Lamar. Bands: TBD\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            11:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            First Bank Road Races finish. Awards will be presented around 12 Noon (based on category completion time) on the Finish Line Village Concert Stage.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            4:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Consumer Show Closes.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            5:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Finish Line Village & Outdoor Concert closes \n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 PM\n        </ion-card-header>\n        \n        <ion-card-content>\n           All activities close.\n        </ion-card-content>\n    </ion-card>\n    <h1>WRAP UP THE TRIPLE THREAT</h1>\n    <h2>SUNDAY, AUGUST 26, 2018</h2>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Wee-Chi-Tah Off-Road Trail Run, 10k, and Half Marathon Distances.\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            7:00 AM\n        </ion-card-header>\n        \n        <ion-card-content>\n            Criterium Races for USAC licensed racers begin in front of the Multi Purpose Events Center\n        </ion-card-content>\n    </ion-card>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/schedule/schedule.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 212:
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
webpackEmptyAsyncContext.id = 212;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/attractions/attractions.module": [
		855,
		8
	],
	"../pages/entertainment/entertainment.module": [
		854,
		7
	],
	"../pages/followrider/followrider.module": [
		856,
		6
	],
	"../pages/hotels/hotels.module": [
		857,
		5
	],
	"../pages/map/map.module": [
		858,
		4
	],
	"../pages/restaurants/restaurants.module": [
		859,
		3
	],
	"../pages/schedule/schedule.module": [
		860,
		2
	],
	"../pages/shopping/shopping.module": [
		861,
		1
	],
	"../pages/vendors/vendors.module": [
		862,
		0
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
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__attractions_attractions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__followrider_followrider__ = __webpack_require__(197);
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
    HomePage.prototype.onIsAuthenticated = function () {
        if (this.authService.getActiveUser()) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
        return this.isAuthenticated;
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-buttons end>\n    <button ion-button icon-only clear (click)="onGoToSettings()">\n      <ion-icon name="more"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-header>\n\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row justify-content-between text-center>\n      <ion-col>\n        <img src="assets/imgs/logo.png" alt="Hotter n\' Hell Logo" />\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card *ngIf="onIsAuthenticated()">\n	<img src="assets/imgs/general-google-map.png" alt="map" />\n	<ion-card-content>\n		<ion-card-title>\n			Map\n		</ion-card-title>\n			<p>\n			Check out the map and routes for one of the hottest bike races available!\n			<button ion-button block (click)="onGoToMap()">MAP</button>\n			</p>\n	</ion-card-content>\n   </ion-card>\n\n  <ion-card *ngIf="!onIsAuthenticated()">\n	<img src="assets/imgs/biker.png" alt="rider" />\n	<ion-card-content>\n		<ion-card-title>\n			Follow Rider\n		</ion-card-title>\n		   <p>\n			Follow your Family or Friend as they compete in the race.\n			<button ion-button block (click)="onGoToFollowRider()">FOLLOW RIDER</button>\n		   </p>\n	</ion-card-content>\n  </ion-card>\n\n  <p>\n    <button ion-button block (click)="onGoToSchedule()">SCHEDULE OF EVENTS</button>\n  </p>\n  <p>\n    <button ion-button block (click)="onGoToAttractions()">ATTRACTIONS</button>\n  </p>\n  <p>\n    <button ion-button block outline>93 DAYS | 17 HRS | 32 MIN | 18 SEC</button>\n  </p>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row justify-content-between text-center>\n        <ion-col>70</ion-col>\n        <ion-col>NE</ion-col>\n        <ion-col>5 mph</ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__services_auth__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_number_settings_number__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_route_settings_route__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_location_settings_location__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_settings__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_settings__ = __webpack_require__(176);
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
    function SettingsPage(navCtrl, authService, modalCtrl, settingsService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.settingsService = settingsService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isAuthenticated = false;
        this.settings = new __WEBPACK_IMPORTED_MODULE_8__models_settings__["a" /* Settings */](null, null, null);
    }
    SettingsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        if (this.authService.getActiveUser()) {
            this.isAuthenticated = true;
        }
        else {
            this.isAuthenticated = false;
        }
        if (this.isAuthenticated == true) {
            var loading_1 = this.loadingCtrl.create({
                content: 'Loading'
            });
            loading_1.present();
            this.authService.getActiveUser().getIdToken()
                .then(function (token) {
                _this.settingsService.fetchSettings(token)
                    .subscribe(function (s) {
                    _this.settings = s;
                    console.log(_this.settings);
                    loading_1.dismiss();
                }, function (error) {
                    loading_1.dismiss();
                    _this.handleError(error.json().error);
                });
            });
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
    SettingsPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occured!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines *ngIf="isAuthenticated">\n    <button ion-item (click)="changeRiderNumber()">\n      Rider Number\n      <ion-badge item-end>{{ settings.num }}</ion-badge>\n    </button>\n    <button ion-item (click)="changeRoute()">\n      <ion-label>Route</ion-label>\n      <ion-badge item-end>100 K</ion-badge>>\n    </button>\n    <button ion-item (click)="changeLocation()">\n      <ion-label>Location</ion-label>\n      <ion-checkbox checked="true" disabled="true" item-end></ion-checkbox>\n    </button>\n  </ion-list>\n\n  <button ion-button block (click)="onGoToSignUp()" *ngIf="!isAuthenticated">\n    Sign Up\n  </button>\n  <button ion-button block outline (click)="onGoToSignIn()" *ngIf="!isAuthenticated">\n    Sign In\n  </button>\n  <button ion-button block (click)="onSignOut()" *ngIf="isAuthenticated">\n    Sign Out\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_settings__["a" /* SettingsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
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
    function SignupPage(navCtrl, authService, settingsService, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.settingsService = settingsService;
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
            _this.settingsService.setNewSettings();
            _this.authService.getActiveUser().getIdToken()
                .then(function (token) {
                _this.settingsService.storeSettings(token)
                    .subscribe(function () { return loading.dismiss(); }, function (error) {
                    loading.dismiss();
                    _this.handleError(error.json().error);
                });
            });
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
    SignupPage.prototype.handleError = function (errorMessage) {
        var alert = this.alertCtrl.create({
            title: 'An error occured!',
            message: errorMessage,
            buttons: ['Ok']
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignUp(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" ngModel name="email" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" ngModel name="password" required [minlength]="6"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Sign Up</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-signin',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/signin/signin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSignIn(f)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" ngModel name="email" required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" ngModel name="password" required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Sign In</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsNumberPage = (function () {
    function SettingsNumberPage(viewCtrl, settingsService) {
        this.viewCtrl = viewCtrl;
        this.settingsService = settingsService;
    }
    SettingsNumberPage.prototype.ionViewWillEnter = function () {
        this.num = this.settingsService.getNumber();
    };
    SettingsNumberPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SettingsNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-number',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-number/settings-number.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Rider Number</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon md="md-close"></ion-icon>\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-item>\n      <ion-label>Rider Number</ion-label>\n      <ion-input type="number" value="{{ num }}" clearOnEdit="true" name="rider-number" required></ion-input>>\n    </ion-item>\n    <button ion-button block type="submit" disabled="true">Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-number/settings-number.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */]) === "function" && _b || Object])
    ], SettingsNumberPage);
    return SettingsNumberPage;
    var _a, _b;
}());

//# sourceMappingURL=settings-number.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-settings-route',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-route/settings-route.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Route</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon md="md-close"></ion-icon>\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-list radio-group>\n      <ion-item>\n        <ion-label>None</ion-label>\n        <ion-radio checked="true" value="none"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>100 Mile</ion-label>\n        <ion-radio checked="false" value="100-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>75 Mile</ion-label>\n        <ion-radio checked="false" value="75-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>50 Mile</ion-label>\n        <ion-radio checked="false" value="50-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>25 Mile</ion-label>\n        <ion-radio checked="false" value="25-mile"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>100 Km</ion-label>\n        <ion-radio checked="false" value="100-km"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>10 Km</ion-label>\n        <ion-radio checked="false" value="10-km"></ion-radio>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" disabled="true">Save</button>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-route/settings-route.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingsRoutePage);
    return SettingsRoutePage;
}());

//# sourceMappingURL=settings-route.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-settings-location',template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/pages/settings-location/settings-location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Location</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon md="md-close"></ion-icon>\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n    <ion-item>\n      <ion-label>Allow Location</ion-label>\n      <ion-checkbox checked="true" name="allow-location"></ion-checkbox>\n    </ion-item>\n    <button ion-button block type="submit" disabled="true">Save</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/pages/settings-location/settings-location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], SettingsLocationPage);
    return SettingsLocationPage;
}());

//# sourceMappingURL=settings-location.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(447);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_schedule_schedule__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_attractions_attractions__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_followrider_followrider__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_settings_location_settings_location__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_settings_number_settings_number__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_route_settings_route__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_hotels_hotels__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_settings__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























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
                __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__["a" /* VendorsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_location_settings_location__["a" /* SettingsLocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_number_settings_number__["a" /* SettingsNumberPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_route_settings_route__["a" /* SettingsRoutePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/entertainment/entertainment.module#EntertainmentPageModule', name: 'EntertainmentPage', segment: 'entertainment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/attractions/attractions.module#AttractionsPageModule', name: 'AttractionsPage', segment: 'attractions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/followrider/followrider.module#FollowriderPageModule', name: 'FollowriderPage', segment: 'followrider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotels/hotels.module#HotelsPageModule', name: 'HotelsPage', segment: 'hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping/shopping.module#ShoppingPageModule', name: 'ShoppingPage', segment: 'shopping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vendors/vendors.module#VendorsPageModule', name: 'VendorsPage', segment: 'vendors', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__angular_http__["b" /* HttpModule */]
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
                __WEBPACK_IMPORTED_MODULE_15__pages_shopping_shopping__["a" /* ShoppingPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_entertainment_entertainment__["a" /* EntertainmentPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_vendors_vendors__["a" /* VendorsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_hotels_hotels__["a" /* HotelsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_settings_location_settings_location__["a" /* SettingsLocationPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_settings_number_settings_number__["a" /* SettingsNumberPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_settings_route_settings_route__["a" /* SettingsRoutePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__services_auth__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__services_settings__["a" /* SettingsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(345);
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
            //nash firebase
            //apiKey: "AIzaSyDmoyHBk0bekmSUqW4qL9G7x2Gh9CvlA6w",
            //authDomain: "hh100mobile-21dce.firebaseapp.com",
            //coty firebase
            // apiKey: "AIzaSyDhQk9JWDz-RiT45tlKkzCTbkN5H8YU-FM",
            // authDomain: "hh100-a8856.firebaseapp.com",
            //hh100 firebase
            apiKey: "AIzaSyB5fBejTe-iUZkGAQTkpjS3tG0d1N9-QSs",
            authDomain: "hh100-98a6c.firebaseapp.com",
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cotyhamilton/hh100mobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/cotyhamilton/hh100mobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = (function () {
    function Settings(num, route, location) {
        this.num = num;
        this.route = route;
        this.location = location;
    }
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(303);
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

},[442]);
//# sourceMappingURL=main.js.map