import {setEnabled} from './form.js';
import {createCard} from './mockup.js';
import {createTestCard} from './card.js';

const testLocationHome = createCard();
const testLocationHotel = createCard();

const map = L.map('map-canvas')
  .on('load', () => {setEnabled();})
  .setView({
    lat: 35.68950,
    lng: 139.6917,
  }, 10);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],

});

const mainMarker = L.marker ({
  lat: 35.68950,
  lng: 139.6917,
},
{
  draggable: true,
  icon: pinIcon,
},
);
mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const formAddress = document.querySelector('#address');
  formAddress.value = `${evt.target.getLatLng().lat.toFixed(5)} , ${evt.target.getLatLng().lng.toFixed(5)}`;
});
const points =[testLocationHome, testLocationHotel];

points.forEach(({location},index) => {
  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const lat = location.lat;
  const lng = location.lng;
  const marker = L.marker({
    lat,
    lng,
  },
  {
    icon,
  },
  );

  marker.addTo(map);
  marker.bindPopup(
    createTestCard(points[index]),
    {
      keepInView: true,
    },
  );
});

export {};
