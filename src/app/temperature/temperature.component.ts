import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { ITemperature } from './ITemperature';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  ITemperature!: ITemperature;
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
    this.weatherService.getTemperature(long, lati).subscribe(res => {
      this.ITemperature = res as any;
      console.log(this.ITemperature, this.ITemperature.longitude)
    })
  }

  resultFound() {
    return Object.keys(this.ITemperature).length > 0;
  }

}
