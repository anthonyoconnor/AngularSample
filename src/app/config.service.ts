import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    getSettings(): Settings {
        return new Settings();
    }
}

export class Settings {
    public inMemoryApi: boolean = true;
    public baseServerUrl: string = "/service/";
}
