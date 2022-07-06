import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../location-reducer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  lon!: number;
  lat!: number;
  coord!: number[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  search(searchForm: NgForm) {
    this.coord = [this.lon, this.lat]
    if (searchForm.invalid) {
      return
    }
    this.store.dispatch({
      type: SET_LOCATION,
      payload: this.coord
    });
    console.log(this.coord, this.lon, this.lat)
  }

}
