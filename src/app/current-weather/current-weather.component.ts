import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { ICurrentWeather } from './ICurrentWeather';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  ICurrentWeather!: ICurrentWeather;
  coord$!: Observable<number[]>;
  lon!: number;
  lat!: number;

  
  constructor(private weatherService: WeatherService, store: Store<any>) {
    this.coord$ = store.pipe(select('coord'));
    this.coord$.subscribe((coord) => {
      this.lon = coord[0];
      this.lat = coord[1];
      this.searchWeather(this.lon, this.lon);
    })
  }

  
  ngOnInit(): void {
  }
  
  searchWeather(long: number, lati: number) {
    this.weatherService.getCurrentWeather(long, lati).subscribe(res => {
      this.ICurrentWeather = res as any;
      console.log(this.ICurrentWeather.current_weather.tempertaure, this.ICurrentWeather.longitude)
    })
  }

  resultFound() {
    return Object.keys(this.ICurrentWeather).length > 0;
  }
}
