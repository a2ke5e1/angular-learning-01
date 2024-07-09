import { Component, OnInit } from '@angular/core';
import {WeatherApiService} from '../../app/service/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  
  data: any;
  constructor(private weatherService: WeatherApiService) { }
  
  ngOnInit(): void {
    this.weatherService.getData().subscribe((response) => {
      this.data = JSON.stringify(response);
    });
  }

}
