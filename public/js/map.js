mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 8, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .addTo(map);
