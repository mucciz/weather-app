export interface ICloudCover {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  hourly: IHourlyInfo;
  hourly_units: IHourlyUnitsInfo;
}

interface IHourlyInfo {
  time: string[];
  cloudcover_mid: number[];
}

interface IHourlyUnitsInfo {
  cloudcover_mid: string;
  time: string;
}
