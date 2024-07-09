import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../app/service/weather.service';
import { Weather } from '../../app/weather-data';


type Coordinates = {
  lat: number;
  lon: number;
};

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  data?: Weather;
  loading = true;
  constructor(private weatherService: WeatherApiService) { }


  getCoordinatesFromIp = async (): Promise<Coordinates> => {
    const ip = await fetch("http://ip-api.com/json/");
    const { lat, lon } = await ip.json();
    return new Promise<Coordinates>((resolve, reject) => {
      resolve({ lat: lat, lon: lon }), reject("No location available");
    });
  };


  getLongLat = async (): Promise<Coordinates> => {
    // Check if the browser has geolocation
    if (!navigator.geolocation) {
      return this.getCoordinatesFromIp();
    }

    // check if the user has given permission to access geolocation
    return new Promise<Coordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({ lat: position.coords.latitude, lon: position.coords.longitude } as Coordinates);
        },
        (error) => {
          console.error("Error getting location:", error);
          resolve(this.getCoordinatesFromIp());
        }
      );
    });
  };


  ngOnInit(): void {
    this.getLongLat().then((cord: Coordinates) => {
      this.weatherService.getData(cord.lat, cord.lon).subscribe((response) => {
        this.data = response as Weather;
        this.loading = false;
      });
    });
  }

}
