
function Item(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  function CarrinhoDeCompras() {
    this.itens = [];
  
    this.adicionarItem = function (item) {
      this.itens.push(item);
    };
  
    this.calcularTotal = function (comDesconto, callback) {
      let total = 0;
      for (const item of this.itens) {
        total += item.preco;
      }
      if (comDesconto) {
        total *= 0.9; // Aplicar um desconto de 10% se necessário
      }
      callback(total);
    };
  }
  
  function exibirTotal(total) {
    console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`);
  }