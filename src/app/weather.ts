export interface IWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  current_weather: iCurrentWeather;
  hourly: IHourlyInfo;
  hourly_units: IHourlyUnitsInfo;
}

interface IHourlyInfo {
  time: string[];
  temperature_2m: number[];
}

interface IHourlyUnitsInfo {
  temperature_2m: number[];
  time: string;
}

interface iCurrentWeather {
  tempertaure: number,
  windspeed: number,
  winddirection: number, 
  weathercode: number,
  time: string
}
