import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { IHumidity } from './IHumidity';

@Component({
  selector: 'app-relative-humidity',
  templateUrl: './relative-humidity.component.html',
  styleUrls: ['./relative-humidity.component.scss']
})
export class RelativeHumidityComponent implements OnInit {
  IHumidity!: IHumidity;

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
    this.weatherService.geRelativeHumidity(long, lati).subscribe(res => {
      this.IHumidity = res as any;
      console.log(this.IHumidity, this.IHumidity.longitude)
    })
  }

  resultFound() {
    return Object.keys(this.IHumidity).length > 0;
  }


}
