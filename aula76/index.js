// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {// 
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {// metodo acrescentado no proto de produto
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {// metodo acrescentado no proto de produto
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);// call para herdar as propriedades de produto // this é referência de camiseta
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);// o proto de camiseta é definido como um objeto vazio que herda o proto de produto
Camiseta.prototype.constructor = Camiseta; // aqui é feita a correção do contrutor colocando camiseta ao inves de produto

Camiseta.prototype.aumento = function(percentual) {// metodo no proto Camiseta, usa o parametro pra aumentar o preço em x porcento
    this.preco = this.preco + (this.preco * (percentual / 100));
};
  
function Caneca(nome, preco, material, estoque) {// herda as propriedades de produto
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);