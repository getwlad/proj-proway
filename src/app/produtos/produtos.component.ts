import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from './services/produto.service';
import { IProduto } from './model/produtos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] = [];
  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const todosProdutos = this.prodService.getAll();
    this.route.queryParamMap.subscribe((params) => {
      const descricao = params.get('descricao')?.toLocaleLowerCase();

      if (descricao) {
        this.produtos = todosProdutos.filter((prod) =>
          prod.descricao.toLowerCase().includes(descricao)
        );
      } else {
        this.produtos = todosProdutos;
      }
    });
  }
}
