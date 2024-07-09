import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env/env.dev';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = env.OPEN_WEATHER_MAP_API_KEY;
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
