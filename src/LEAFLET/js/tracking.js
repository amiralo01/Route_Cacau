//Personalizar css no mapa
let myCustomColorUser = 'background-color: red;';
const markerHtml = 'width: 3rem; height: 3rem; display: block; left: -1.5rem; top: -1.5rem; position: relative; border-radius: 3rem 3rem 0; transform: rotate(45deg); border: 3px solid #FFFFFF;';
           
//Cordenadas do Ponto A = Caminhão
const coordTruck = [-2.419041, -54.740592];
//Cordenadas do Ponto B = Usuário
const cooduser = [-2.426609, -54.730969]
var map = L.map('map').setView(coordTruck, 17);//Localização do BMT na UFOPA.(Temporário)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customIcon = L.icon({
iconUrl: '../../../Img/truckicon.png',

iconSize:  [40, 40], // size of the icon
});

//marker
var marker = L.marker(coordTruck, {title: "Tracking", icon:customIcon}).addTo(map);

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

marker.bindPopup('<b>A trajetória do seu cacau</b><br>Abaixo do mapa se encontra algumas informações da produção do cacau</br><br><a href: "https://www.google.com/maps?s=web&rlz=1C1ISCS_pt-PTBR974BR974&lqi=Ch5FbXByZXNhcyBkZSBDYWNhdSBlbSBTYW50YXLDqW1IiYnn6M6wgIAIWiwQABABEAIYARgCGAQiHmVtcHJlc2FzIGRlIGNhY2F1IGVtIHNhbnRhcsOpbZIBEWNob2NvbGF0ZV9mYWN0b3J5qgFoCggvbS8wZndwZBABKhUiEWVtcHJlc2FzIGRlIGNhY2F1KAwyHxABIhsHxqNC0ZhaORFcKw6b8Wp9yOXVQuC0592d4uUyIhACIh5lbXByZXNhcyBkZSBjYWNhdSBlbSBzYW50YXLDqW0&phdesc=HlIhcZXRITY&vet=12ahUKEwjU78ul1deCAxU7lZUCHW4VCBUQ1YkKegQICxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kenc2B8e-YiSMYf66uS3cX6I&daddr=Av.+Mendon%C3%A7a+Furtado,+3551+-+Loja+22+-+Aldeia,+Santar%C3%A9m+-+PA,+68040-050">Endereço: </a>Av. Mendonça Furtado, 3551 - Loja 22 - Aldeia, Santarém - PA, 68040-050</br><br>Santarém</br><a href="https://deliverydireto.com.br/cacaushow/6025">Website</a><br>Call: <a href: "tel:(93) 99179-9878">(93) 99179-9878</a></br>').openPopup();

const data = {
    gatwick: {
        coords: [-2.419041, -54.740592],
        title: "Gatwick truck",
        address: 'Av. Mendonça Furtado, 3551 - Loja 22 - Aldeia, Santarém - PA, 68040-050',
        website: "https://www.google.com/maps?s=web&rlz=1C1ISCS_pt-PTBR974BR974&lqi=Ch5FbXByZXNhcyBkZSBDYWNhdSBlbSBTYW50YXLDqW1IiYnn6M6wgIAIWiwQABABEAIYARgCGAQiHmVtcHJlc2FzIGRlIGNhY2F1IGVtIHNhbnRhcsOpbZIBEWNob2NvbGF0ZV9mYWN0b3J5qgFoCggvbS8wZndwZBABKhUiEWVtcHJlc2FzIGRlIGNhY2F1KAwyHxABIhsHxqNC0ZhaORFcKw6b8Wp9yOXVQuC0592d4uUyIhACIh5lbXByZXNhcyBkZSBjYWNhdSBlbSBzYW50YXLDqW0&phdesc=HlIhcZXRITY&vet=12ahUKEwjU78ul1deCAxU7lZUCHW4VCBUQ1YkKegQICxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kenc2B8e-YiSMYf66uS3cX6I&daddr=Av.+Mendon%C3%A7a+Furtado,+3551+-+Loja+22+-+Aldeia,+Santar%C3%A9m+-+PA,+68040-050",
        phone: 93991799878
    }
}

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