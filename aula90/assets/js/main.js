//const request = obj => {
//    return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open(obj.method, obj.url, true);
//       xhr.send();

//       xhr.addEventListener('load', () => {
//           if(xhr.status >= 200 && xhr.status < 300) {
//           resolve(xhr.responseText);
//           } else {
//         reject(xhr.statusText);
//        }
//     });
//   });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');// obter a URL do elemento href ('a')
        const response = await fetch(href); //faz a requisição HTTP utilizando fetch, await [e usado antes de fetch, pois retorna uma promessa e await aguardará a resolução dessa promessa
        if(response.status !== 200) throw new Error('ERRO 404!'); //retornando erro
        const html = await response.text();// conversão da resposta em texto/response.text retorna outra promessa
        carregaResultado(html);//é chamada, passando o conteúdo HTML lido da página como argumento.
    } catch(e) {
        console.log(e);//Se ocorrer algum erro dentro do bloco try, o código capturará a exceção (erro) e o controle será transferido para o bloco catch.
        // O argumento 'e' receberá o erro capturado.
    }
}
 
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}