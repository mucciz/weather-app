export interface Weather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  hourly: hourlyInfo;
  hourly_units: hourlyUnitsInfo;
}

interface hourlyInfo {
  time: string[];
  temperature_2m: number[];
}

interface hourlyUnitsInfo {
  temperature_2m: number[];
  time: string;
}
