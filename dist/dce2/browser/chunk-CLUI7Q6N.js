import{a as A}from"./chunk-RHCJJ7XN.js";import{$ as C,Aa as v,C as y,Ca as g,Fa as f,Ha as h,Ia as j,Ja as E,La as I,O as b,P as l,Qa as M,Ta as L,Z as D,bb as R,ca as F,cb as _,da as a,ea as p,f as S,fb as w,gb as T,ma as s,sa as c,ta as o,ua as u,wa as k,ya as m,za as d}from"./chunk-LMBD4G5S.js";var z=["*"],U=i=>["/profile",i],G=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-article-meta"]],inputs:{article:"article"},standalone:!0,features:[f],ngContentSelectors:z,decls:10,vars:12,consts:[[1,"article-meta"],[3,"routerLink"],[3,"src"],[1,"info"],[1,"author",3,"routerLink"],[1,"date"]],template:function(r,t){r&1&&(m(),c(0,"div",0)(1,"a",1),u(2,"img",2),o(),c(3,"div",3)(4,"a",4),v(5),o(),c(6,"span",5),v(7),E(8,"date"),o()(),d(9),o()),r&2&&(a(),s("routerLink",h(8,U,t.article.author.username)),a(),s("src",t.article.author.image,F),a(2),s("routerLink",h(10,U,t.article.author.username)),a(),g(" ",t.article.author.username," "),a(2),g(" ",I(8,5,t.article.createdAt,"longDate")," "))},dependencies:[_,L],encapsulation:2,changeDetection:0});let i=e;return i})();var N=["*"],O=(i,e,B)=>({disabled:i,"btn-outline-primary":e,"btn-primary":B}),ie=(()=>{let e=class e{constructor(n,r,t){this.articleService=n,this.router=r,this.userService=t,this.destroyRef=b(D),this.isSubmitting=!1,this.toggle=new C}toggleFavorite(){this.isSubmitting=!0,this.userService.isAuthenticated.pipe(y(n=>n?this.article.favorited?this.articleService.unfavorite(this.article.slug):this.articleService.favorite(this.article.slug):(this.router.navigate(["/register"]),S)),T(this.destroyRef)).subscribe({next:()=>{this.isSubmitting=!1,this.toggle.emit(!this.article.favorited)},error:()=>this.isSubmitting=!1})}};e.\u0275fac=function(r){return new(r||e)(p(A),p(R),p(w))},e.\u0275cmp=l({type:e,selectors:[["app-favorite-button"]],inputs:{article:"article"},outputs:{toggle:"toggle"},standalone:!0,features:[f],ngContentSelectors:N,decls:3,vars:5,consts:[[1,"btn","btn-sm",3,"click","ngClass"],[1,"ion-heart"]],template:function(r,t){r&1&&(m(),c(0,"button",0),k("click",function(){return t.toggleFavorite()}),u(1,"i",1),d(2),o()),r&2&&s("ngClass",j(1,O,t.isSubmitting,!t.article.favorited,t.article.favorited))},dependencies:[M],encapsulation:2});let i=e;return i})();export{G as a,ie as b};
