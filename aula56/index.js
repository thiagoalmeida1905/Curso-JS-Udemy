// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        // Getter - Um getter é uma função que é usada para obter o valor de uma propriedade específica de um objeto
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter é uma função que é usada para atribuir um valor a uma propriedade específica de um objeto. Ele é definido usando a sintaxe set seguida pelo nome da propriedade desejada. Quando essa propriedade é modificada, o setter é automaticamente chamado, recebendo o novo valor como parâmetro. O setter permite a validação e a manipulação do valor antes de atribuí-lo à propriedade.
        set nomeCompleto(valor) {
            valor = valor.split(' '); //O método split é usado em uma string para dividi-la em um array de substrings, com base em um separador especificado. No caso do código, valor.split(' ') está dividindo a string valor em um array de substrings separadas por espaços em branco. 

            this.nome = valor.shift();// O método shift é usado em um array para remover e retornar o primeiro elemento desse array. No código, valor.shift() está removendo o primeiro elemento do array retornado pelo split e retornando-o como resultado. Ou seja, ele está retornando o primeiro nome do array, que é o nome.

            this.sobrenome = valor.join(' ');//está juntando os elementos do array retornado pelo split, usando um espaço em branco como separador. Isso recria a string completa do sobrenome, caso ele tenha espaços. Por exemplo, se valor for ["Silva", "Ferreira"], o join criará uma string "Silva Ferreira".
        },

        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,

        // Getter
        get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
        }
    };
}
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  const p2 = criaPessoa('Thiago', 'Almeida', 1.90, 57);
  const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);