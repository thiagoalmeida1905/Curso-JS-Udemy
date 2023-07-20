//AJAX -> Uso metodológico de tecnologia (Js e XML), tornar pag. mais interativas

const request = obj => {
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);//parametros de obj
    xhr.send();
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {//status é o numero do erro, 200 a 300 = sucesso
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
            }
        }); // addEventListener
    }); //new Promise
}; //object

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();// pegando o nome da tag que foi clicada e convertendo para lowercase

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href//pegando href a partir do click e colocando em url que vai ser mandada como parametro para o xhr.open
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}