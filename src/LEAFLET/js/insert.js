function savedata() {

    const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        img: document.getElementById('img').value,
    };

    axios.post('http://[::1]:3000/fornecedors', data);

}

async function fetchData() {
    try {
        
        const response = await axios.get('http://[::1]:3000/fornecedors');
        const data = response.data;
        const listElement = document.querySelector('#fornecedor p');
        // Limpar qualquer conteúdo anterior
        listElement.innerHTML = '';

        // Iterar sobre todos os dados e adicioná-los à lista
        data.forEach(item => {
            const listItem = document.createElement('li');

            
            /*data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.nome; // Substitua 'nome' pelo nome do campo que você deseja exibir
            listElement.appendChild(listItem);
            });*/

            // pega todos os atributos dos objetos
            for (const key in item) {
                if (item.hasOwnProperty(key)) {
                    const attributeItem = document.createElement('span');
                    if (key == 'senha') {
                        attributeItem.textContent = key.delete;
                    } else {
                        attributeItem.textContent = `${key}: ${item[key]+';'}`;
                    }
                    
                    listItem.appendChild(attributeItem);
                }
            }
              
            // Adicionar o item à lista
            listElement.appendChild(listItem);
        });
                           
    } catch (error) {
        console.error('Erro ao obter dados do Fornecedor:', error);
    }
}

// Chame a função para carregar os dados quando a página carregar
fetchData();

function savecocoa() {
    const cocoa = {
        dataFab: new Date(document.getElementById('dataFab').value),
        localidadeId: parseFloat(document.getElementById('localidadeId').value),
        tipoCacauId: parseFloat(document.getElementById('tipoCacauId').value),
    };

    axios.post('http://[::1]:3000/cacaus', cocoa);

}

function savecocoatype() {
    const typecocoa = {
        descricao: document.getElementById('descricao').value,
    };

    axios.post('http://[::1]:3000/tipo-cacaus', typecocoa);

}

function savelocal() {
    const local = {
        nomeLocal: document.getElementById('nomeLocal').value,
        cidade: document.getElementById('cidade').value,
        fornecedorId: parseFloat(document.getElementById('fornecedorId').value),

    };

    axios.post('http://[::1]:3000/localidades', local);

}
