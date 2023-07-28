import geraSenha from "./geradores";

//selecionando todos os campos
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()//div senha-gerada recebe o valor de 'gera()'
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value, //valor digitado pelo usuário no campo de entrada da quantidade de caracteres desejados na senha.
        chkMaiusculas.checked, //um valor booleano que indica se a opção de inclusão de minúsculas está marcada ou não.
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada Selecionado.';
}