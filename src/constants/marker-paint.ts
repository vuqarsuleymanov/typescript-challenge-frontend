import { CircleLayerSpecification } from 'maplibre-gl'

export const MARKER_PAINT = {
  // 'circle-color': '#000',
  'circle-color': [
    'case',
    [">", ["get", "peopleOn"], 90], "#3bb2d0",
    [">", ["get", "peopleOn"], 60], "#e55e5e",
    [">", ["get", "peopleOn"], 30], "#ff3bff",
    [">", ["get", "peopleOn"], 0], "#fbb03b",
    "#ccc"
  ],
  'circle-radius': ['interpolate', ['linear'], ['zoom'], 5, 1, 15, ['*', 1, ['get', 'peopleOn']]],
  'circle-stroke-opacity': 1,
  'circle-stroke-color': '#fff',
  'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 5, 0.5, 15, 2],
  'circle-opacity': 1,
} as CircleLayerSpecification['paint']
