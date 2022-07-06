export interface IWindSpeed {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  hourly: IHourlyInfo;
  hourly_units: IHourlyUnitsInfo;
}

interface IHourlyInfo {
  time: string[];
  windspeed_120m: number[];
}

interface IHourlyUnitsInfo {
  windspeed_120m: string;
  time: string;
}
