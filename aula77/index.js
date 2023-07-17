// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {// definindo uma propriedade (cpfLimpo)
        enumerable: true,
        get: function (){
            return cpfEnviado.replace(/\D+/g, ''); // estamos fazendo um get no cpfEnviado e deixando somente os numeros, removendo os pontos etc
        }
    });
}

ValidaCPF.prototype.valida = function(){ // metodo valida
    if (typeof this.cpfLimpo === 'undefined') return false;// se cpflimpo for undefined, retorna false
    if (this.cpfLimpo.length !== 11) return false; //se cpflimpo nao conter 11 numero, retorna false
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);// transformando o cpf em array
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial +  digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){// metodo criaDigito (as contas vão aqui)
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpf.array.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11)
    return digito > 9 ? 0 : digito;
}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52');
cpf.valida();