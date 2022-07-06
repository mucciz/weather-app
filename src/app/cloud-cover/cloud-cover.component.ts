import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { ICloudCover } from './IcloudCover';

@Component({
  selector: 'app-cloud-cover',
  templateUrl: './cloud-cover.component.html',
  styleUrls: ['./cloud-cover.component.scss']
})
export class CloudCoverComponent implements OnInit {
  ICloudCover!: ICloudCover;
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
    this.weatherService.getCloudCover(long, lati).subscribe(res => {
      this.ICloudCover = res as any;
      console.log(this.ICloudCover, this.ICloudCover.longitude)
    })
  }

  resultFound() {
    return Object.keys(this.ICloudCover).length > 0;
  }

}
