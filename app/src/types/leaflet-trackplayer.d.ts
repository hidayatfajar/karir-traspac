declare module 'leaflet-trackplayer' {
  import { Map, Icon } from 'leaflet';
  export default class TrackPlayer {
    constructor(latlngs: [number, number][], options?: {
      markerIcon?: Icon,
      speed?: number,
      markerRotation?: boolean,
    });
    addTo(map: Map): this;
    start(): void;
  }
}