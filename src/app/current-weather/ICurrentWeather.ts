export interface ICurrentWeather {
    latitude: number;
    longitude: number;
    elevation: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    current_weather: CurrentWeather;
}

interface CurrentWeather {
    tempertaure: number,
    windspeed: number,
    winddirection: number, 
    weathercode: number,
    time: string
  }