export interface DirectionsResponse {
  routes: Route[];
  waypoints: Waypoint[];
  code: string;
  uuid: string;
}

export interface Route {
  weight_name: string;
  weight: number;
  duration: number;
  distance: number;
  legs: Leg[];
  geometry: Geometry;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type: GeometryType;
}

export enum GeometryType {
  LineString = 'LineString',
}

export interface Leg {
  via_waypoints: any[];
  admins: Admin[];
  weight: number;
  duration: number;
  steps: Step[];
  distance: number;
  summary: string;
}

export interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1: string;
}

export interface Step {
  intersections: Intersection[];
  maneuver: Maneuver;
  name: string;
  duration: number;
  distance: number;
  driving_side: DrivingSide;
  weight: number;
  mode: Mode;
  geometry: Geometry;
}

export enum DrivingSide {
  Right = 'right',
}

export interface Intersection {
  entry: boolean[];
  bearings: number[];
  duration?: number;
  traffic_signal?: boolean;
  mapbox_streets_v8?: MapboxStreetsV8;
  is_urban?: boolean;
  admin_index: number;
  out?: number;
  weight?: number;
  geometry_index: number;
  location: number[];
  in?: number;
  turn_weight?: number;
  turn_duration?: number;
  lanes?: Lane[];
  classes?: string[];
  stop_sign?: boolean;
}

export interface Lane {
  indications: Indication[];
  valid_indication: Indication;
  valid: boolean;
  active: boolean;
}

export enum Indication {
  Straight = 'straight',
}

export interface MapboxStreetsV8 {
  class: Class;
}

export enum Class {
  Primary = 'primary',
  Secondary = 'secondary',
  Street = 'street',
  StreetLimited = 'street_limited',
}

export interface Maneuver {
  type: ManeuverType;
  instruction: string;
  bearing_after: number;
  bearing_before: number;
  location: number[];
  modifier?: string;
}

export enum ManeuverType {
  Arrive = 'arrive',
  Depart = 'depart',
  Turn = 'turn',
}

export enum Mode {
  Driving = 'driving',
}

export interface Waypoint {
  distance: number;
  name: string;
  location: number[];
}
