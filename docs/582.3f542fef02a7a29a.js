"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[582],{7582:(M,u,a)=>{a.r(u),a.d(u,{CarrinhoModule:()=>v});var c=a(433),l=a(6895),s=a(9541),n=a(1571),d=a(2136),m=a(466);function g(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"li"),n._UZ(1,"img",6),n.TgZ(2,"p"),n._uU(3),n.qZA(),n.TgZ(4,"p",7),n._uU(5),n.ALo(6,"currency"),n.qZA(),n.TgZ(7,"label"),n._uU(8," Quantidade "),n.TgZ(9,"input",8),n.NdJ("ngModelChange",function(i){const p=n.CHM(t).$implicit;return n.KtG(p.quantidade=i)})("change",function(){n.CHM(t);const i=n.oxw(2);return n.KtG(i.calcularTotal())}),n.qZA()(),n.TgZ(10,"button",9),n.NdJ("click",function(){const h=n.CHM(t).$implicit,p=n.oxw(2);return n.KtG(p.removeItem(h.id))}),n._UZ(11,"i",10),n.qZA()()}if(2&o){const t=e.$implicit;n.xp6(1),n.Q6J("src",t.imagem,n.LSH),n.xp6(2),n.Oqu(t.descricao),n.xp6(2),n.hij("Pre\xe7o: ",n.xi3(6,4,t.preco,"BRL"),""),n.xp6(4),n.Q6J("ngModel",t.quantidade)}}function C(o,e){if(1&o){const t=n.EpF();n.TgZ(0,"div")(1,"ul"),n.YNc(2,g,12,7,"li",3),n.qZA(),n.TgZ(3,"h2",4),n._uU(4),n.ALo(5,"currency"),n.qZA(),n.TgZ(6,"button",5),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.comprar())}),n._uU(7,"Comprar"),n.qZA()()}if(2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngForOf",t.itensCarrinho),n.xp6(2),n.hij("Total: ",n.xi3(5,2,t.total,"BRL"),"")}}function f(o,e){1&o&&n._uU(0," Nenhum produto foi adicionado ao carrinho\n")}const _=[{path:"",component:(()=>{class o{constructor(t,r,i){this.carrinhoService=t,this.notifyService=r,this.router=i,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obtemCarrinho(),this.calcularTotal()}calcularTotal(){this.total=this.itensCarrinho.reduce((t,r)=>Number(t)+Number(r.preco)*Number(r.quantidade),0)}removeItem(t){this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==t),this.carrinhoService.removerProdutoCarrinho(t),this.calcularTotal()}comprar(){this.notifyService.notify("Parab\xe9ns voc\xea finalizou a compra"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.e),n.Y36(m.c),n.Y36(s.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[1,"prod-img",3,"src"],[1,"preco"],["type","number",3,"ngModel","ngModelChange","change"],["type","button",1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,r){if(1&t&&(n.TgZ(0,"h2",0),n._uU(1,"Carrinho"),n.qZA(),n.YNc(2,C,8,5,"div",1),n.YNc(3,f,1,0,"ng-template",null,2,n.W1O)),2&t){const i=n.MAs(4);n.xp6(2),n.Q6J("ngIf",r.itensCarrinho.length>0)("ngIfElse",i)}},dependencies:[l.sg,l.O5,c.Fj,c.wV,c.JJ,c.On,l.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}button[_ngcontent-%COMP%]:hover{cursor:pointer}@media screen and (max-width: 768px){.preco[_ngcontent-%COMP%], .prod-img[_ngcontent-%COMP%]{display:none}}p[_ngcontent-%COMP%]{margin-left:5px}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[s.Bz.forChild(_),s.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.ez,x,c.u5]}),o})()}}]);