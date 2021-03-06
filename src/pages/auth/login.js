var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { getLogger } from '../../utils';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from "../../providers/auth.service";
var logger = getLogger('Log: ');
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authService, loadController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadController = loadController;
        logger.log('Constructor: LoginPage');
    }
    LoginPage.prototype.logIn = function () {
        logger.log("Try to log in: " + this.cnp + " " + this.password);
        this.authService.logIn(this.cnp, this.password);
        // this.navCtrl.setRoot(SellPage, {"note": "Good0"});
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        LoadingController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map