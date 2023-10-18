function Item(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  function calcularCompra(carrinho, desconto, callback) {
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    const valorComDesconto = desconto ? total * 0.9 : total;
    callback(total, valorComDesconto);
  }
  
  function exibirTotalCompra(total, valorComDesconto) {
    console.log(`Valor total da compra: R$${total.toFixed(2)}`);
    if (total !== valorComDesconto) {
      console.log(`Valor com desconto: R$${valorComDesconto.toFixed(2)}`);
    }
  }
  
const item1 = new Item("Arroz", 5.0);
const item2 = new Item("Feijão", 4.0);
const item3 = new Item("Macarrão", 3.0);
  
const carrinho = [item1, item2, item3];
  
calcularCompra(carrinho, true, exibirTotalCompra);