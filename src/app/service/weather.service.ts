import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env.dev';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService {
    private apiKey = env.OPEN_WEATHER_MAP_API_KEY;
    private BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    private units = 'metric';

    constructor(private http: HttpClient) { }
    

    

    getData(lat: number, lon: number) {
        const weatherURL = new URL(this.BASE_URL);
        weatherURL.searchParams.append('lat', lat.toString());
        weatherURL.searchParams.append('lon', lon.toString());
        weatherURL.searchParams.append('units', this.units);
        weatherURL.searchParams.append('appid', this.apiKey);

        return this.http.get(weatherURL.toString());
    }
}
