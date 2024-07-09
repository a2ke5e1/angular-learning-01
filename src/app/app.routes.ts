import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { CounterComponent } from '../pages/counter/counter.component';
import { TodoComponent } from '../pages/todo/todo.component';
import { WeatherComponent } from '../pages/weather/weather.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'weather', component: WeatherComponent }
];
