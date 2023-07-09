const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {// essa função permite que o usuario passe os valores apertando a tecla Enter.
    if (e.keyCode === 13) { //verificando se foi apertado a tecla enter
        if (!inputTarefa.value) return; // se estiver vazio a função para de ser executada
        criaTarefa(inputTarefa.value);// se estiver preenchida, é executada a função criaTarefa
    }
});

function limpaInput(){
    inputTarefa.value = '';// limpa o campo de entrada, o texto de digitado é removido
    inputTarefa.focus();
}

function criaBotaoApagar(li) { // botão apagar
    li.innerText += ' ';// espaçamento 
    const botaoApagar = document.createElement('button'); // criação do botão na LI
    botaoApagar.innerText = 'Apagar'; // definição do texto do botão
    botaoApagar.setAttribute('class', 'apagar');//define o atributo de classe do botão como 'apagar'
    li.appendChild(botaoApagar); //anexa o botão apagar como filho do elemento 'li'
}

function criaTarefa(textoInput) {
    const li = criaLi();// chama a função criaLi que retorna um elemento li
    li.innerText = textoInput;// define o texto interno do elemento li como valor do parâmetro
    tarefas.appendChild(li);// anexa li a lista de tarefas
    limpaInput(); // limpa o campo de entrada após a criação da tarefa
    criaBotaoApagar(li); // chama a função cria botão passando como argumento li
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return; // verifica está vazio, se estiver a função retorna e para
    criaTarefa(inputTarefa.value); //caso esteja preenchido, executa a função criaTarefa
});

document.addEventListener('click', function(e) {
    const el = e.target; // essa linha atribui o alvo (elemento) do evento clique
    if (el.classList.contains('apagar')) { // se o usuario clicar onde contem a classe apagar
        el.parentElement.remove();// a linha remove o elemento pai desse elemento
        salvarTarefas();
    }
});

function salvarTarefas(){ // essa função é responsavel por salvar as tarefas na memoria local do navegador utilizando o objeto 'localStorage'
    const liTarefas = tarefas.querySelectorAll('li');// seleciona todos os elementos li de .tarefas
    const listaDeTarefas = [];// array vazio

    for (let tarefa of liTarefas){// itera todo li na variavel liTarefas
        let tarefaTexto = tarefa.innerHTML; //todo conteudo HTML de cada LI é armazenado na var 
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();// o 'apagar' é removido do conteudo de tarefa, e o trim serve para remobver espaços em branco que sobraram.
        listaDeTarefas.push(tarefaTexto);// add todo conteudo de tarefas à lista
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // a lista é convertida em string JSON para ser armazenada no LocalStorage
    localStorage.setItem('tarefas', tarefasJSON); //chave 'tarefas' p/ poder acessar depois
};

function adicionaTarefasSalvas() {//Essa função é responsável por adicionar as tarefas salvas anteriormente de volta à lista de tarefas.
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);// conversão da string JSON em objeto javaScript

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa); // reponsável por adcionar uma tarefa a lista visualmetne
    }
}
adicionaTarefasSalvas();