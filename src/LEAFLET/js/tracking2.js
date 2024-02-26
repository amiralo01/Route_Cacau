var map = L.map('map').setView([-2.428857, -54.731626], 17);//Localização da UFOPA Rondon.(Temporário)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var customIcon = L.icon({
iconUrl: '../../../Img/truckicon.png',

iconSize:   [40, 40], // size of the icon
iconAnchor:   [26, 94], // point of the icon which will correspond to marker's location
popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//marker
var marker = L.marker([-2.428857, -54.731626], {title: "Tracking", icon:customIcon}).addTo(map);

marker.bindPopup('<b>A trajetória do seu cacau</b><br>Abaixo do mapa se encontra algumas informações da produção do cacau</br><br><a href: "https://www.google.com/maps?s=web&rlz=1C1ISCS_pt-PTBR974BR974&lqi=Ch5FbXByZXNhcyBkZSBDYWNhdSBlbSBTYW50YXLDqW1IiYnn6M6wgIAIWiwQABABEAIYARgCGAQiHmVtcHJlc2FzIGRlIGNhY2F1IGVtIHNhbnRhcsOpbZIBEWNob2NvbGF0ZV9mYWN0b3J5qgFoCggvbS8wZndwZBABKhUiEWVtcHJlc2FzIGRlIGNhY2F1KAwyHxABIhsHxqNC0ZhaORFcKw6b8Wp9yOXVQuC0592d4uUyIhACIh5lbXByZXNhcyBkZSBjYWNhdSBlbSBzYW50YXLDqW0&phdesc=HlIhcZXRITY&vet=12ahUKEwjU78ul1deCAxU7lZUCHW4VCBUQ1YkKegQICxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=Kenc2B8e-YiSMYf66uS3cX6I&daddr=Av.+Mendon%C3%A7a+Furtado,+3551+-+Loja+22+-+Aldeia,+Santar%C3%A9m+-+PA,+68040-050">Endereço: </a>Av. Mendonça Furtado, 3551 - Loja 22 - Aldeia, Santarém - PA, 68040-050</br><br>Santarém</br><a href="https://deliverydireto.com.br/cacaushow/6025">Website</a><br>Call: <a href: "tel:(93) 99179-9878">(93) 99179-9878</a></br>').openPopup();

const data = {
    gatwick: {
        coords: [-2.428857, -54.731626],
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