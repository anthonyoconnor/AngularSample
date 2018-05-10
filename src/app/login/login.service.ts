import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';


import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ConfigService } from '../config.service';


@Injectable()
export class LoginService {
    public isLoggedIn: boolean;
    private serverUrl: string;

    constructor(private httpClient: HttpClient, private configService: ConfigService) {
        this.serverUrl = configService.getSettings().baseServerUrl;
    }


    public loginUser(userName: string, password: string): Observable<boolean> {
        const loginModel = new LoginModel();
        loginModel.userName = userName;
        loginModel.password = password;
        const body = JSON.stringify(loginModel);

        return this.httpClient.post<boolean>(this.serverUrl + '/login', body).pipe(
            map(resp => {
                return resp;
            }));
    }

}

class LoginModel {
    public userName: string;
    public password: string;
}

@Injectable()
export class DevelopmentLoginService extends LoginService {
    public loginUser(userName: string, password: string): Observable<boolean> {
        console.log(userName);
        console.log(password);
        if (userName === 'aoc' && password === '1234') {
            this.isLoggedIn = true;
            return of(true).pipe(delay(500));
        } else {
            this.isLoggedIn = false;
            return of(false).pipe(delay(500));
        }
    }
}

// To be able to easily test the UI without having to actually hit a real API
// we can use the inMemoryApi flag. This will decide at runtime which service to
// actually instantiate.
// This makes it much easier to work on the UI and API independently.
export function loginServiceFactory(httpClient: HttpClient, configService: ConfigService) {
    let service: any;

    if (configService.getSettings().inMemoryApi) {
        service = new DevelopmentLoginService(httpClient, configService);
    } else {
        service = new LoginService(httpClient, configService);
    }
    return service;
}

export let actionServiceProvider = {
    provide: LoginService,
    useFactory: loginServiceFactory,
    deps: [HttpClient, ConfigService]
};
