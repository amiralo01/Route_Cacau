//Personalizar css no mapa
let myCustomColorUser = 'background-color: red;';
const markerHtml = 'width: 3rem; height: 3rem; display: block; left: -1.5rem; top: -1.5rem; position: relative; border-radius: 3rem 3rem 0; transform: rotate(45deg); border: 3px solid #FFFFFF;';
           
//Cordenadas do Ponto A = Caminhão
const coordTruck = [-2.415511, -54.736649];
// Coordenadas do Ponto B = Loja
const coordStore = [-2.423463, -54.719017];
//Cordenadas do Ponto C = Fornecedor
const coordFrncd = [-14.835173, -39.226597];
var map = L.map('map').setView(coordStore, 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customIcon = L.icon({
iconUrl: '../../../Img/truckicon.png',


iconSize:  [40, 40], // size of the icon
});


var customIcon2 = L.icon({
    iconUrl: '../../../Img/store.png',
    
    
    iconSize:  [40, 40], // size of the icon
    });

var customIcon3 = L.icon({
    iconUrl: '../../../Img/cacau.png',
    
    
    iconSize:  [40, 40], // size of the icon
    });

//marker
var marker = L.marker(coordStore, {title: "Store", icon:customIcon2}).addTo(map);

function startService () {
    //Array de cordenadas. Simulação do App enviando para o App.
    const latlng = []

    //Personalizar ponto no mapa
    const icon = L.divIcon({
        className: "pointers",
        iconAnchor: [0, 24],
        labelAnchor: [-6, 0],
        popupAnchor: [0, -36],
        html: '<span style="${markerHtml}${myCustomColourUser}" />'
    })
}

var newMarker = L.marker([]);

marker.bindPopup('<div class="popup-content"><div style="text-align: center;"><img src="../../../Img/Logo_Cacau_Show.png"  style="max-width: 12em; border-radius: 50%;" class="popup-image"/><b>       </br><span style="color: chocolate; font-size: 1.2em;"><b>A trajetória do seu cacau </b></span><br>Abaixo do mapa se encontra algumas informações da produção do cacau</br></div><br><a href="https://g.co/kgs/AosFWJr">Endereço:</a> Av. Mendonça Furtado, 1986 - Aldeia, Santarém - PA, 68040-050</br><br>Santarém</br><a href="https://www.ifood.com.br/delivery/santarem-pa/cacau-show-mendonca-furtado-aldeia?utm_medium=ReserveGoogle">Website</a><br>Call: <a href="https://www.google.com/search?sca_esv=0d192b7b40015184&sca_upv=1&rlz=1C1ISCS_pt-PTBR974BR974&tbs=lf:1,lf_ui:4&tbm=lcl&q=loja+cacau+show+em+Santar%C3%A9m&rflfq=1&num=10&sa=X&ved=2ahUKEwi3uMLpg6yFAxXZkZUCHbAmBywQjGp6BAgeEAE&biw=1517&bih=674&dpr=0.9#">(93) 99135-3173</a></br>').openPopup();

const data = {
    gatwick: {
        coords: [-2.423463, -54.719017],
        title: "Gatwick truck",
        address: 'Av. Mendonça Furtado, 3551 - Loja 22 - Aldeia, Santarém - PA, 68040-050',
        website: "https://g.co/kgs/AosFWJr",
        phone: 93991799878
    }
}

var popup = L.popup();

L.marker(coordTruck, {title: "Transport", icon: customIcon}).addTo(map).bindPopup('<div class="popup-content"><div style="text-align: center;"><span style="color: green; font-weight: bold;"><b>Chegada do Cacau em Santarém-PA</br></span><b>A carga de cacau veio Ilhéus-BA até o porto das docas de Santarém-PA</br></div><br><a href="https://g.co/kgs/Xuy48en">Endereço:</a> Avenida Cuiabá, s/n - Vera Paz, Rod. Santarém-Cuiabá, S/N - Salé, Santarém - PA</br><br><a href="http://www.cdp.com.br/">Website</a></br><br>Call: <a href="https://www.google.com/search?q=porto+de+santar%C3%A9m&sca_esv=0d192b7b40015184&sca_upv=1&rlz=1C1ISCS_pt-PTBR974BR974&biw=1517&bih=674&tbm=lcl&ei=yHAQZr_CB4KB5OUP_PqcuA8&udm=&ved=0ahUKEwi_xqbnhayFAxWCALkGHXw9B_cQ4dUDCAk&uact=5&oq=porto+de+santar%C3%A9m&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhJwb3J0byBkZSBzYW50YXLDqW0yBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMggQABgWGB4YCjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOW_AlDflgJYk7cCcAF4AJABAZgBvQSgAeAdqgEJMC45LjcuNS0xuAEDyAEA-AEBmAIQoAKiG6gCAMICChAAGIAEGIoFGEPCAgsQABiABBixAxiDAcICDRAAGIAEGIoFGEMYsQPCAg4QABiABBixAxiDARjJA8ICCxAAGIAEGIoFGJIDwgIMEAAYgAQYigUYQxgKwgIIEAAYgAQYsQOYAwiSBwgwLjEuMTQuMaAH82U&sclient=gws-wiz-local#">(93) 3512-8500</a></br></div>');

L.marker(coordFrncd, {title: "Supplier", icon: customIcon3}).addTo(map).bindPopup('<div class="popup-content"><div style="text-align: center;"><span style="color: brown; font-weight: bold;"><b>Fornecedor do Cacau</br></span><b>O fornecedor do Cacau da marca cacau show é a Fazenda Cedro & Atlantico cacau & chocolate</br></div><br><a href="https://g.co/kgs/t9dhGW6">Endereço:</a> Ilhéus-BA</br><br>Call: <a href="https://www.google.com/search?q=fazenda+de+cacau+do+Brasil&sca_esv=0d192b7b40015184&sca_upv=1&rlz=1C1ISCS_pt-PTBR974BR974&biw=1517&bih=674&tbm=lcl&ei=wXEQZq3PEdbI5OUPiPmLqAw&udm=&ved=0ahUKEwjts47ehqyFAxVWJLkGHYj8AsUQ4dUDCAk&uact=5&oq=fazenda+de+cacau+do+Brasil&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhpmYXplbmRhIGRlIGNhY2F1IGRvIEJyYXNpbDIGEAAYFhgeMgYQABgWGB5I_09Q1xVY1EtwAXgAkAEAmAGkA6ABly6qAQswLjEwLjEzLjIuMbgBA8gBAPgBAZgCGqACoTCoAgDCAgsQABiABBixAxiDAcICBRAAGIAEwgIIEAAYgAQYsQPCAgoQABiABBiKBRhDwgIQEAAYgAQYigUYQxixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYyQPCAgsQABiABBiKBRiSA5gDCJIHCjAuNS4xOC4xLjKgB5KBAQ&sclient=gws-wiz-local#">(16) 99797-3253</a></br></div>');

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
  
async function fetchData() {
    try {
                
        const response = await axios.get('http://[::1]:3000/fornecedors');
        const data = response.data;
                
        const listElement = document.querySelector('#fornecedor ul');
        // Limpar qualquer conteúdo anterior
        listElement.innerHTML = '';

        data.forEach(item => {
            const listItem = document.createElement('li');
            listeItem.textContent = item.tipo;

            listItem.textContent = item.nome; // Substitua 'nome' pelo nome do campo que você deseja exibir
            listElement.appendChild(listItem);
                    
        });

    }catch (error) {
    console.error('Erro ao obter dados do Fornecedor:', error);
    }
}
fetchData();