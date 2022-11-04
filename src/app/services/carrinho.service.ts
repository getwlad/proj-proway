import { IProdutoCarrinho } from './../produtos/model/produtos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];
  constructor() {}

  obtemCarrinho(): IProdutoCarrinho[] {
    try {
      this.itens = JSON.parse(localStorage.getItem('carrinho') || '[]');
      return this.itens;
    } catch (error) {
      this.itens = [];
      return this.itens;
    }
  }
  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    if (this.itens.length === 0) {
      this.itens = this.obtemCarrinho();
    }
    const itemIndex = this.itens.findIndex((item) => item.id === produto.id);
    if (itemIndex > -1) {
      this.itens[itemIndex].quantidade += 1;
    } else {
      this.itens.push(produto);
    }

    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
  removerProdutoCarrinho(id: number) {
    this.itens = this.itens.filter((item) => item.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }
}
