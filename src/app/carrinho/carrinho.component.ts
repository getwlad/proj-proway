import { Router } from '@angular/router';
import { NotifyService } from './../services/notify.service';
import { IProdutoCarrinho } from './../produtos/model/produtos';
import { CarrinhoService } from './../services/carrinho.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;
  constructor(
    private carrinhoService: CarrinhoService,
    private notifyService: NotifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, current) =>
        Number(prev) + Number(current.preco) * Number(current.quantidade),
      0
    );
  }
  removeItem(id: number) {
    this.itensCarrinho = this.itensCarrinho.filter((item) => item.id !== id);
    this.carrinhoService.removerProdutoCarrinho(id);
    this.calcularTotal();
  }
  comprar() {
    this.notifyService.notify('Parabéns você finalizou a compra');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);
  }
}
