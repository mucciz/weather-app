export interface IHumidity {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  hourly: IHourlyInfo;
  hourly_units: IHourlyUnitsInfo;
}

interface IHourlyInfo {
  time: string[];
  relativehumidity_2m: number[];
}

interface IHourlyUnitsInfo {
  relativehumidity_2m: string;
  time: string;
}
