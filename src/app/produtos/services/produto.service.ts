import { IProduto } from './../model/produtos';
import { Injectable } from '@angular/core';
import { produtos as importedProdutos } from '../model/produtos';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: IProduto[] = importedProdutos;

  constructor() {}

  getAll(): IProduto[] {
    return this.produtos;
  }
  getOne(id: number): IProduto | undefined {
    return this.produtos.find((produto) => produto.id === id);
  }
}
