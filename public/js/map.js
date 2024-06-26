mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 8, // starting zoom
});

let newlocation = listing.location;

const marker1 = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 20 }).setHTML(
      `<h4>${newlocation}</h4><p>Exact location will be provided after booking`
    )
  )
  .addTo(map);
