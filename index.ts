import { Produto } from "./src/model/Produto";
import { CarrinhoDeCompra} from "./src/model/CarrinhoDeCompra";


const Produto1 = new Produto(`meia`,12.50);
const Produto2 = new Produto(`camiseta`,62.75);
const Produto3 = new Produto(`meia`,50.48);
const Produto4 = new Produto(`meia`,150.59);
const Produto5 = new Produto(`meia`,35.99);


const carrinhoDeCompra = new CarrinhoDeCompra();
carrinhoDeCompra.inserirProdutos(Produto1,Produto2,Produto3,Produto4,Produto5);
console.log(`Quantidade de itens no carrinho: ${carrinhoDeCompra.quantidadedeprodutos()}`);
console.log(`Valor Total: ${carrinhoDeCompra.valorTotal()}`);
