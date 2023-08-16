const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade (valor) {
        if (typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade () {
        return this[_velocidade];
    }

    acelerar () {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidadevelocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
  
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');// dividi o 'valor' em um array de substrings usando espaço como separador
        this.nome = valor.shift();//o primeiro elemento do array é removido do array e atribuído à propriedade nome do objeto.
        this.sobrenome = valor.join(' '); // é aplicado o método join no array resultante,Isso significa que os elementos restantes do array (que correspondem aos sobrenome) são combinados em uma única string, separados por espaços em branco, e essa string é atribuída à propriedade sobrenome do objeto.
    }
}

const p1 = new Pessoa('Thiago', 'Almeida');
p1.nomeCompleto = 'Thiago Santana de Almeida';
console.log(p1.nome);
console.log(p1.sobrenome);