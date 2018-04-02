import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { AuthService } from "./auth";
import { Settings } from "../models/settings";
import 'rxjs/Rx';

@Injectable()
export class SettingsService {

    private settings : Settings;

    constructor(private http: Http, private authService: AuthService) {}

    setNumber(num: number) {
        this.settings.num = num;
        console.log(this.settings.num);
    }

    setRoute(route: string) {
        this.settings.route = route;
        console.log(this.settings.route);
    }

    setAllowLocation(location: boolean) {
        this.settings.location = location;
        console.log(this.settings.location);
    }

    getNumber() {
        return this.settings.num;
    }

    getRoute() {
        return this.settings.route;
    }

    getAllowLocation() {
        return this.settings.location;
    }

    setNewSettings() {
        this.settings = new Settings(0, "none", false)
        console.log(this.settings);
    }

    storeSettings(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http
            .put('https://hh100-98a6c.firebaseio.com/' + userId + '/settings.json?auth=' + token, this.settings)
            .map((response: Response) => {
                return response.json();
            });
    }

    fetchSettings(token: string) {
        const userId = this.authService.getActiveUser().uid;
        return this.http.get('https://hh100-98a6c.firebaseio.com/' + userId + '/settings.json?auth=' + token)
            .map((response: Response) => {
                return response.json();
            })
            .do((data) => {
                this.settings = data;
            });
    }
}