export interface ITemperature {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    hourly: IHourlyInfo;
    hourly_units: IHourlyUnitsInfo;
  }
  
  interface IHourlyInfo {
    time: string[];
    temperature_2m: number[];
  }
  
  interface IHourlyUnitsInfo {
    temperature_2m: string;
    time: string;
  }
  