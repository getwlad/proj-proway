import { CarrinhoService } from './../../../services/carrinho.service';
import { NotifyService } from './../../../services/notify.service';
import { IProduto, IProdutoCarrinho } from './../../model/produtos';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css'],
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined = undefined;
  quantidade: number = 1;

  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private notifyService: NotifyService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: number | undefined = Number(params.get('id'));
      this.produto = this.prodService.getOne(id);
      if (typeof this.produto === 'undefined') {
        this.router.navigateByUrl('produtos');
      }
    });
  }
  adicionarAoCarrinho() {
    this.notifyService.notify(
      `O produto ${this.produto?.descricao} foi adicionado ao seu carrinho`
    );
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade,
    };
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
}
