import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './location-reducer';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CloudCoverComponent } from './cloud-cover/cloud-cover.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WindSpeedComponent } from './wind-speed/wind-speed.component';
import { RelativeHumidityComponent } from './relative-humidity/relative-humidity.component';
// import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    TopBarComponent,
    HomePageComponent,
    CloudCoverComponent,
    TemperatureComponent,
    WindSpeedComponent,
    RelativeHumidityComponent,
    // HighchartsChartComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    StoreModule.forRoot({
      coord: locationReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
