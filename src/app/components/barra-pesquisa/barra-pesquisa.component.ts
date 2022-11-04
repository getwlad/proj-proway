import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css'],
})
export class BarraPesquisaComponent implements OnInit {
  descricao = null;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  pesquisar() {
    if (this.descricao) {
      this.router.navigate(['produtos'], {
        queryParams: {
          descricao: this.descricao,
        },
      });
      return;
    } else {
      this.router.navigate(['produtos']);
    }
  }
}
