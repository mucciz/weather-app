import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { IWindSpeed } from './IWindSpeed';

@Component({
  selector: 'app-wind-speed',
  templateUrl: './wind-speed.component.html',
  styleUrls: ['./wind-speed.component.scss']
})
export class WindSpeedComponent implements OnInit {
  IWindSpeed!: IWindSpeed;
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
    this.weatherService.getWindSpeed(long, lati).subscribe(res => {
      this.IWindSpeed = res as any;
      console.log(this.IWindSpeed, this.IWindSpeed.longitude)
    })
  }

  resultFound() {
    return Object.keys(this.IWindSpeed).length > 0;
  }

}
