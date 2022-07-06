import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  apiUrl:string = "https://api.open-meteo.com/v1/forecast"

  getCurrentWeather(lat:number, lon:number) {
    return this.http.get(`${this.apiUrl}?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=Africa%2FNairobi`)
  }
  getCloudCover(lat:number, lon:number) {
    return this.http.get(`${this.apiUrl}?latitude=${lat}&longitude=${lon}&hourly=cloudcover_mid&timezone=Africa%2FNairobi`)
  }
  getTemperature(lat:number, lon:number) {
    return this.http.get(`${this.apiUrl}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=Africa%2FNairobi`)
  }
  getWindSpeed(lat:number, lon:number) {
    return this.http.get(`${this.apiUrl}?latitude=${lat}&longitude=${lon}&hourly=windspeed_120m&timezone=Africa%2FNairobi`)
  }
  geRelativeHumidity(lat:number, lon:number) {
    return this.http.get(`${this.apiUrl}?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m&timezone=Africa%2FNairobi`)
  }
}
