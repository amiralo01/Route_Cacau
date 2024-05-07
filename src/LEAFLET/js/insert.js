function savefornecedor() {

    const data = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        img: document.getElementById('img').value,
    };

    axios.post('http://[::1]:3000/fornecedors', data);
    alert('Cadastro Realizado!');
    

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
            // Criar um elemento para cada fornecedor
            const listItem = document.createElement('li');
            // Criar um elemento de span para o nome
            const nameSpan = document.createElement('span');
            // Criar um elemento de span para o ID
            const idSpan = document.createElement('span');
            
            // Adicionar o nome e o ID ao elemento de span correspondente
            nameSpan.textContent = `Nome: ${item.nome}`;
            idSpan.textContent = ` ID: ${item.idFornecedor}`;
            //const listItem = document.createElement('li');//

            // Adicionar os elementos de span ao item da lista
            listItem.appendChild(nameSpan);
            listItem.appendChild(idSpan);
              
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
        tipoCacauId: parseFloat(document.getElementById('tipoCacauId').value),
        rotaId: parseFloat(document.getElementById('rotaId').value),
    };

    axios.post('http://[::1]:3000/cacaus', cocoa);
    alert('Cadastro Realizado!');

}

function savelocal() {
    const local = {
        avenida: document.getElementById('avenida').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,

    };

    axios.post('http://[::1]:3000/localidades', local);
    alert('Cadastro Realizado!');

}