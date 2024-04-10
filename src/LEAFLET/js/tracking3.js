//Cordenadas do Ponto A = Caminhão
const coordTruck = [-2.415511, -54.736649];
// Coordenadas do Ponto B = Loja
const coordStore = [-2.445985, -54.757458];
//Cordenadas do Ponto C = Fornecedor
const coordFrncd = [-14.835173, -39.226597];


var map = L.map('map').setView(coordStore, 14);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker
var customIcon = L.icon({
iconUrl: '../../../Img/truckicon.png',

iconSize:   [40, 40], // size of the icon
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
marker.bindPopup('<div class="popup-content"><div style="text-align: center;"><img src="../../../Img/Amazoniere_logo.png" style="max-width:10em; border-radius: 50%;" class="popup-image"/><b>       </br><span style="color: chocolate; font-size: 1.2em;"><b>A trajetória do seu cacau</b></span><br>Abaixo do mapa se encontra algumas informações da produção do cacau</br></div><br><a href: "https://www.google.com/maps?s=web&rlz=1C1ISCS_pt-PTBR974BR974&lqi=Ch5FbXByZXNhcyBkZSBDYWNhdSBlbSBTYW50YXLDqW1IiYnn6M6wgIAIWiwQABABEAIYARgCGAQiHmVtcHJlc2FzIGRlIGNhY2F1IGVtIHNhbnRhcsOpbZIBEWNob2NvbGF0ZV9mYWN0b3J5qgFoCggvbS8wZndwZBABKhUiEWVtcHJlc2FzIGRlIGNhY2F1KAwyHxABIhsHxqNC0ZhaORFcKw6b8Wp9yOXVQuC0592d4uUyIhACIh5lbXByZXNhcyBkZSBjYWNhdSBlbSBzYW50YXLDqW0&phdesc=HlIhcZXRITY&vet=12ahUKEwjU78ul1deCAxU7lZUCHW4VCBUQ1YkKegQICxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kenc2B8e-YiSMYf66uS3cX6I&daddr=Av.+Mendon%C3%A7a+Furtado,+3551+-+Loja+22+-+Aldeia,+Santar%C3%A9m+-+PA,+68040-050">Endereço: </a>Av. Eng. Fernando Guilhon - Santarenzinho, Santarém - PA, 68035-000</br><br><a href="https://www.amazoniere.com.br/">Website</a><br>Call: <a href: "tel:(93) 99902-1343">(93) 99902-1343</a></br></div>').openPopup();

const data = {
    gatwick: {
        coords: [-2.415547, -54.737551],
        title: "Gatwick truck",
        address: 'Av. Mendonça Furtado, 3551 - Loja 22 - Aldeia, Santarém - PA, 68040-050',
        website: "https://www.google.com/maps?s=web&rlz=1C1ISCS_pt-PTBR974BR974&lqi=Ch5FbXByZXNhcyBkZSBDYWNhdSBlbSBTYW50YXLDqW1IiYnn6M6wgIAIWiwQABABEAIYARgCGAQiHmVtcHJlc2FzIGRlIGNhY2F1IGVtIHNhbnRhcsOpbZIBEWNob2NvbGF0ZV9mYWN0b3J5qgFoCggvbS8wZndwZBABKhUiEWVtcHJlc2FzIGRlIGNhY2F1KAwyHxABIhsHxqNC0ZhaORFcKw6b8Wp9yOXVQuC0592d4uUyIhACIh5lbXByZXNhcyBkZSBjYWNhdSBlbSBzYW50YXLDqW0&phdesc=HlIhcZXRITY&vet=12ahUKEwjU78ul1deCAxU7lZUCHW4VCBUQ1YkKegQICxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kenc2B8e-YiSMYf66uS3cX6I&daddr=Av.+Mendon%C3%A7a+Furtado,+3551+-+Loja+22+-+Aldeia,+Santar%C3%A9m+-+PA,+68040-050",
        phone: 93991799878
    }
}

L.marker(coordTruck, {title: "Transport", icon: customIcon}).addTo(map).bindPopup('<div class="popup-content"><div style="text-align: center;"><span style="color: green; font-weight: bold;"><b>Chegada do Cacau em Santarém-PA</br></span><b>A carga de cacau veio Ilhéus-BA até o porto das docas de Santarém-PA</br></div><br><a href="https://g.co/kgs/Xuy48en">Endereço:</a> Avenida Cuiabá, s/n - Vera Paz, Rod. Santarém-Cuiabá, S/N - Salé, Santarém - PA</br><br><a href="http://www.cdp.com.br/">Website</a></br><br>Call: <a href="https://www.google.com/search?q=porto+de+santar%C3%A9m&sca_esv=0d192b7b40015184&sca_upv=1&rlz=1C1ISCS_pt-PTBR974BR974&biw=1517&bih=674&tbm=lcl&ei=yHAQZr_CB4KB5OUP_PqcuA8&udm=&ved=0ahUKEwi_xqbnhayFAxWCALkGHXw9B_cQ4dUDCAk&uact=5&oq=porto+de+santar%C3%A9m&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhJwb3J0byBkZSBzYW50YXLDqW0yBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMggQABgWGB4YCjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOW_AlDflgJYk7cCcAF4AJABAZgBvQSgAeAdqgEJMC45LjcuNS0xuAEDyAEA-AEBmAIQoAKiG6gCAMICChAAGIAEGIoFGEPCAgsQABiABBixAxiDAcICDRAAGIAEGIoFGEMYsQPCAg4QABiABBixAxiDARjJA8ICCxAAGIAEGIoFGJIDwgIMEAAYgAQYigUYQxgKwgIIEAAYgAQYsQOYAwiSBwgwLjEuMTQuMaAH82U&sclient=gws-wiz-local#">(93) 3512-8500</a></br></div>');
L.marker(coordFrncd, {title: "Supplier", icon: customIcon3}).addTo(map).bindPopup('<div class="popup-content"><div style="text-align: center;"><span style="color: brown; font-weight: bold;"><b>Fornecedor do Cacau</br></span><b>O fornecedor do Cacau da marca cacau show é a Fazenda Cedro & Atlantico cacau & chocolate</br></div><br><a href="https://g.co/kgs/t9dhGW6">Endereço:</a> Ilhéus-BA</br><br>Call: <a href="https://www.google.com/search?q=fazenda+de+cacau+do+Brasil&sca_esv=0d192b7b40015184&sca_upv=1&rlz=1C1ISCS_pt-PTBR974BR974&biw=1517&bih=674&tbm=lcl&ei=wXEQZq3PEdbI5OUPiPmLqAw&udm=&ved=0ahUKEwjts47ehqyFAxVWJLkGHYj8AsUQ4dUDCAk&uact=5&oq=fazenda+de+cacau+do+Brasil&gs_lp=Eg1nd3Mtd2l6LWxvY2FsIhpmYXplbmRhIGRlIGNhY2F1IGRvIEJyYXNpbDIGEAAYFhgeMgYQABgWGB5I_09Q1xVY1EtwAXgAkAEAmAGkA6ABly6qAQswLjEwLjEzLjIuMbgBA8gBAPgBAZgCGqACoTCoAgDCAgsQABiABBixAxiDAcICBRAAGIAEwgIIEAAYgAQYsQPCAgoQABiABBiKBRhDwgIQEAAYgAQYigUYQxixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgILEAAYgAQYsQMYyQPCAgsQABiABBiKBRiSA5gDCJIHCjAuNS4xOC4xLjKgB5KBAQ&sclient=gws-wiz-local#">(16) 99797-3253</a></br></div>');

var popup = L.popup();

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