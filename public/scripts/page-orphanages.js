//cria mapa
const map = L.map('mapid').setView([-27.2207556,-49.6481081], 16);

//cria e adiciona tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// criar icone

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68,,],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minWidth: 240
}).setContent('Lar das  meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src=./public/images/arrow-white.svg> </a>') 


//criar e adicionar marker

L.marker([-27.2207556,-49.6481081], {icon})
.addTo(map)
.bindPopup(popup);