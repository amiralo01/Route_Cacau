// Para puxar as informações do banco de dados
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

async function getResourceJson(uri){
    let result = await fetch(`http://127.0.0.1:3000/${uri}`, {
        method: 'GET',
    })
    if(result.status > 299) return Promise.reject(await result.json())
    return result.json()
}

async function postResourceJson(uri, data){
    let result = await fetch(`http://127.0.0.1:3000/${uri}`, {
        method: 'POST',
        body: typeof data === 'string' ? data : JSON.stringify(data)
    })
    return result.json()
}

async function fetchDataRota( cb, idRota ){

    let rota = await getResourceJson('rotas/'+ idRota + '?filter=' + JSON.stringify({ include:["rotas_cacau" , "rotas_locInter"] }))
    let fornecedor = await getResourceJson(`fornecedors/${rota?.fornecedorId}`)
    let localidadeOrigem = await getResourceJson('localidades/' +rota?.localidadeOrigem )
    let localidadeFinal = await getResourceJson('localidades/' +rota?.localidadeFinal )
    let tipoCacau = await getResourceJson('/tipo-cacaus?filter=' + JSON.stringify({ where: { idTipo: { inq: rota.rotas_cacau.map(c => c.tipoCacauId) } } }) )
    let cacau = await getResourceJson('/cacaus?filter=' + JSON.stringify({ where: { idTipo: { inq: rota.rotas_cacau.map(c => c.tipoCacauId) } } }) )
    rota.fornecedor = fornecedor;
    rota.tiposCacau = tipoCacau
    rota.cacaus = cacau
    const localidadeInter = rota?.rotas_locInter.map(loc => { return loc.idLocalidadeInter; }) 
    let locoIntermediarias = []
    for(let loc of localidadeInter){
        let _locoIntermediarias = await getResourceJson(`/localidades/${loc}`)
        locoIntermediarias.push(_locoIntermediarias)
    }
    rota.localidades = { localidadeOrigem, localidadeFinal }
    rota.localidadesIntermediarias = locoIntermediarias
    typeof cb === 'function' && cb(rota)
}

fetchData();

fetchDataRota(function(rota){
    let fornecedor = rota?.fornecedor
    const input = document.querySelector('#nome_fornecedor')
    input.textContent = fornecedor.nome

    document.querySelector('#imagem_fornecedor').setAttribute('src', fornecedor.img )
    document.querySelector('#localidade_origem').textContent = Object.values(rota.localidades.localidadeOrigem).slice(1).join(', ') 
    document.querySelector('#localidade_final').textContent = Object.values(rota.localidades.localidadeFinal).slice(1).join(', ') 
    document.querySelector('#email').textContent = fornecedor.email
    
    const localidadediv = document.querySelector('#localidade_intermediaria')
    
    let loca = createLocalidades(rota?.localidadesIntermediarias)
    localidadediv.appendChild(loca)
    
    let tipoCacau = createTipoCacau(rota.tiposCacau)
    document.querySelector('#type').appendChild(tipoCacau)

    let cacaus = createCacaus(rota.cacaus)
    document.querySelector('#data').appendChild(cacaus)
}, new URLSearchParams(window.location.search).get('rota'))

function createTipoCacau(tipoCacau){
    const ul = document.createElement('ul')
    ul.style = "display: block;";
    const lis = new Array(tipoCacau.length).fill(null).map(() => document.createElement('li'))
    lis.forEach((v, index) =>{
        v.textContent = Object.values(tipoCacau[index]).slice(1).join(', ')
        v.style = "display: block; margin-bottom:10px;"
        ul.appendChild(v)
    })
    
    return ul
}
function createCacaus(tipoCacau){
    const ul = document.createElement('ul')
    ul.style = "display: block;";
    const lis = new Array(tipoCacau.length).fill(null).map(() => document.createElement('li'))
    lis.forEach((v, index) =>{
        v.textContent = new Date(tipoCacau[index].dataFab).toLocaleDateString()
        v.style = "display: block; margin-bottom:10px;"
        ul.appendChild(v)
    })
    
    return ul
}

function createLocalidades(localidades){
    const ul = document.createElement('ul')
    ul.style = "display: block;";
    const lis = new Array(localidades.length).fill(null).map(() => document.createElement('li'))
    lis.forEach((v, index) =>{
        v.textContent = Object.values(localidades[index]).slice(1).join(', ')
        v.style = "display: block; margin-bottom:10px;"
        ul.appendChild(v)
    })
    
    return ul
}