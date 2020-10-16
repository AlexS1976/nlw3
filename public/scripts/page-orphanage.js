const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


//cria mapa
const map = L.map('mapid', options).setView([-27.2207556,-49.6481081], 16);

//cria e adiciona tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"></a> contributors'
}).addTo(map);
// criar icone

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68,,],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//criar e adicionar marker

L.marker([-27.2207556,-49.6481081], {icon})
.addTo(map);

// galeria de imagens limpar os botões

function selectImage(event){

    
    const button = event.currentTarget
    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActivitClass)

    function removeActivitClass(button) {
        button.classList.remove("active")
    }
    //selcionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar container de imagem
    imageContainer.src = image.src
    
    // adicionar a classe activive para esse botão
    button.classList.add("active") 



   
}
