(function(e){function n(n){for(var r,u,o=n[0],s=n[1],l=n[2],f=0,d=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&d.push(a[u][0]),a[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var s=t[o];0!==a[s]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},i=[];function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var c=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},"20ab":function(e,n,t){},2704:function(e,n,t){"use strict";var r=t("20ab"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"body"}},[e._m(0),e._v("- "),t("div",{attrs:{id:"topnav"}},[t("topnav",{on:{setsidenav:e.setSidenav}})],1),t("div",{attrs:{id:"sidenav"}},[t("sidenav",{attrs:{aufgaben:this.aufgaben},on:{openAufgabe:e.openAufgabe}})],1),t("div",{attrs:{id:"content"}},[e._v("Content")]),t("div",{attrs:{id:"footer"}},[e._v("Footer")])])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"titel"}},[e._v(" Titel "),t("p",[e._v("Huasarbeit Web Enginering")])])}],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.jsondata,(function(n){return t("button",{key:n,on:{click:function(t){return e.setSidenav(n.Aufgaben)}}},[e._v(e._s(n.Titel))])})),0)},o=[],s=t("bd9b"),l={name:"topnav",props:{},data:function(){return{jsondata:null}},methods:{setSidenav:function(e){console.log(e),this.$emit("setsidenav",e)}},created:function(){this.jsondata=s.nav,console.log(this.jsondata)}},c=l,f=(t("be97"),t("2877")),d=Object(f["a"])(c,u,o,!1,null,"7fa9a1e4",null),p=d.exports,b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._l(e.aufgaben,(function(n,r){return t("button",{key:r,on:{click:function(t){return e.openAufgabe(n)}}},[e._v(e._s(n))])})),e._v(" - ")],2)},g=[],v={name:"sidenav",props:{aufgaben:Array},data:function(){return{}},methods:{openAufgabe:function(e){this.$emit("openAufgabe",e)}},created:function(){}},h=v,m=(t("2704"),Object(f["a"])(h,b,g,!1,null,"3b63f394",null)),_=m.exports,A=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",[t("b",[e._v(" Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt? ")])]),t("p",[e._v("-broken links "),t("br"),e._v(" -die hypertext comunety war schon viel weiter "),t("br"),e._v(" -http zu unspieziefisch (die semantig fehlt) der empfäger entscheidet über das verständnis.")]),t("br"),t("p",[t("b",[e._v("Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde? ")])]),t("p",[e._v("-drei teschnologiene die offewn und unabhängig von einander verändert werden können. "),t("br"),e._v(" -kostenlose lizensierung "),t("br"),e._v(" -einfach "),t("br"),e._v(" -hat auf TCPIP aufgesetzt. "),t("br"),e._v(" -das weltweite vernetzen.")])])}],S={name:"U2A1",props:{}},W=S,M=Object(f["a"])(W,A,y,!1,null,"60ef65ae",null),T=M.exports,w={name:"App",components:{topnav:p,sidenav:_,U2A1:T},data:function(){return{aufgaben:Array}},methods:{setSidenav:function(e){this.aufgaben=e,console.log(this.aufgaben)},openAufgabe:function(e){var n=r["a"].extend(T),t=new n;t.$mount(),document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(t.$el)}}},j=w,k=(t("034f"),Object(f["a"])(j,a,i,!1,null,null,null)),x=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,n,t){},bd9b:function(e){e.exports=JSON.parse('{"nav":[{"Titel":"HTML und CSS","Aufgaben":{"U2A1":"Erfolgsprinzipien des WWW","U2A2":"HTML-Literatur","U2A3":"HTML-Wireframe","U2A4":"Wireframe mit HTML und CSS"}},{"Titel":"Responsive Web Design","Aufgaben":["Responsiv mit Flexbox Desktop-First","Responsiv mit Flexbox Mobile-First","Responsiv mit Grid Layout Desktop-First","Responsiv mit Grid Layout Mobile-First","Mögliche Klausurfragen"]},{"Titel":"JavaScript","Aufgaben":["Funktionen in JavaScript","JavaScript-Objekte","Mögliche Klausuraufgaben"]},{"Titel":"DOM","Aufgaben":["Einkaufsliste","Rednerliste mit Zeitmessung","Performanzmessungen","Mögliche Klausuraufgaben"]},{"Titel":"Asynchrones JavaScript","Aufgaben":["Promises","async,await","WWW-Navigator","Mögliche Klausuraufgaben"]},{"Titel":"Lit Elemente","Aufgaben":["Counter mit Start und Limit","Stoppuhr","Flexible Menü-Komponente","Mögliche Klausuraufgaben"]},{"Titel":"SVG","Aufgaben":["SVG-Diagramm","Statistik-Balkendiagramm","Bezier-Animation","Mögliche Klausuraufgaben"]},{"Titel":"WebApps","Aufgaben":["Routing","State Management"]},{"Titel":"Vue.js","Aufgaben":["Counter in Vue.js","Menü-Komponente","Vue.js WWW-Navigator","Mögliche Klausuraufgaben"]},{"Titel":"MEVN","Aufgaben":["Erweiterung der MEVN-App","MEVN WWW-Navigator","Mögliche Klausuraufgaben"]},{"Titel":"PHP","Aufgaben":["Registrierung mit PHP","Login mit PHP","WWW-Navigator zum Content-Editor ausbauen","Code Review zu Vue.js"]},{"Titel":"React","Aufgaben":["React Tutorial"]},{"Titel":"Web App Security","Aufgaben":["XSS","Sicherer Array Wrapper","Sicherheitslücken finden","Mögliche Klausuraufgaben"]}]}')},be97:function(e,n,t){"use strict";var r=t("fbd3"),a=t.n(r);a.a},fbd3:function(e,n,t){}});
//# sourceMappingURL=app.194ff252.js.map