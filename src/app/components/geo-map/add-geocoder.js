import 'leaflet-control-geocoder'

export function addGeocoder(map, drawnItems) {
  L.Control.geocoder({
    position: 'topright',
    defaultMarkGeoCode: true,
    geocoder: L.Control.Geocoder.nominatim({
     geocodingQueryParams: {
       polygon_geojson: 1
     }
    }),
    placeholder: 'Suche',
    showUniqueResult: true
  })
    .on('markgeocode', function(e) {
      drawnItems.clearLayers()

      let geoJsonLayer = L.geoJson(e.geocode.properties.geojson)

      drawnItems.addLayer(geoJsonLayer)

      map.fitBounds(geoJsonLayer.getBounds())
    })
    .addTo(map);
}
