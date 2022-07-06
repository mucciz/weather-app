import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  coord$!: Observable<number[]>;
  lon!: number;
  lat!: number;

  constructor(private store: Store<any>) { 
    this.coord$ = this.store.pipe(select('coord'));
    this.coord$.subscribe((coord) => {
      this.lon = coord[0];
      this.lat = coord[1];
      console.log(coord,'coord')
    })
  }

  ngOnInit(): void {
    console.log(this.lon, 'homepage')
  }

}
