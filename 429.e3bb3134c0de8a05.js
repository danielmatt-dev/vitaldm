"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[429],{5429:(T,g,o)=>{o.r(g),o.d(g,{ResetPasswordModule:()=>B});var u=o(5779),i=o(177),m=o(1141),v=o(5430),f=o(2242),d=o(4341),h=o(229),w=o(563),C=o(7722),p=o(3607),c=o(467),x=o(5621),y=o(1510),M=o(9091),e=o(4438),P=o(7693),k=o(7608);let R=(()=>{class s{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";static \u0275fac=function(r){return new(r||s)};static \u0275cmp=e.VBU({type:s,selectors:[["p-progressSpinner"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration"},decls:3,vars:10,consts:[["role","progressbar",1,"p-progress-spinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progress-spinner-svg"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progress-spinner-circle"]],template:function(r,n){1&r&&(e.j41(0,"div",0),e.qSk(),e.j41(1,"svg",1),e.nrm(2,"circle",2),e.k0s()()),2&r&&(e.Y8G("ngStyle",n.style)("ngClass",n.styleClass),e.BMQ("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),e.R7$(),e.xc7("animation-duration",n.animationDuration),e.BMQ("data-pc-section","root"),e.R7$(),e.BMQ("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[i.YU,i.B3],styles:['@layer primeng{.p-progress-spinner{position:relative;margin:0 auto;width:100px;height:100px;display:inline-block}.p-progress-spinner:before{content:"";display:block;padding-top:100%}.p-progress-spinner-svg{animation:p-progress-spinner-rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;inset:0;margin:auto}.p-progress-spinner-circle{stroke-dasharray:89,200;stroke-dashoffset:0;stroke:#d62d20;animation:p-progress-spinner-dash 1.5s ease-in-out infinite,p-progress-spinner-color 6s ease-in-out infinite;stroke-linecap:round}}@keyframes p-progress-spinner-rotate{to{transform:rotate(360deg)}}@keyframes p-progress-spinner-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes p-progress-spinner-color{to,0%{stroke:#d62d20}40%{stroke:#0057e7}66%{stroke:#008744}80%,90%{stroke:#ffa700}}\n'],encapsulation:2,changeDetection:0})}return s})(),O=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=e.$C({type:s});static \u0275inj=e.G2t({imports:[i.MD]})}return s})();const b=()=>({width:"100%"}),F=()=>["/auth/login"],S=()=>({width:"25px",height:"25px"});function A(s,L){1&s&&e.nrm(0,"p-progressSpinner",17),2&s&&e.Aen(e.lJ4(2,S))}function I(s,L){if(1&s&&(e.j41(0,"span",18),e.EFF(1),e.k0s()),2&s){const t=e.XpG();e.R7$(),e.JRh(t.labelButton)}}let j=(()=>{class s{constructor(t,r,n){this.layoutService=t,this.messageService=r,this.remote=n,this.isLoading=!1,this.validator=new x.t(this.messageService),this.resetState()}resetState(){this.correo="",this.password="",this.confirmarPassword="",this.disabledCorreo=!1,this.disabledPassword=!0,this.labelInstructions="Ingrese su correo y presione validar correo",this.labelButton="Validar correo"}validarCorreo(){var t=this;return(0,c.A)(function*(){if(!t.validator.validarCampoCorreo(t.correo))return;t.isLoading=!0;const r=yield t.remote.validarCorreo(t.correo);setTimeout(()=>{if(t.isLoading=!1,"Right"===r._tag)t.disabledCorreo=!0,t.disabledPassword=!1,t.labelInstructions="Ahora ingrese una nueva contrase\xf1a",t.labelButton="Reestablecer contrase\xf1a",t.mensageAlerta({title:"\xc9xito",message:"El correo ingresado ha sido validado",type:"success"});else if("Left"===r._tag){if(r.left instanceof y.lB)return void t.mensageAlerta({title:"Correo no encontrado",message:"Aseg\xfarese de que el correo ingresado sea correcto o que tenga una cuenta registrada"});t.mensageAlerta({title:"Ocurri\xf3 un problema",message:"Verifica tu conexi\xf3n a Internet e int\xe9ntalo nuevamente",type:"error"})}},3e3)})()}reestablecer(){var t=this;return(0,c.A)(function*(){if(!t.validator.validarCampoPassword({password:t.password,label:"Nueva contrase\xf1a"}))return;if(t.password!==t.confirmarPassword)return void t.mensageAlerta({message:"\xa1Casi listo! Aseg\xfarate de que ambas contrase\xf1as sean iguales para continuar"});const r=yield t.remote.reestablecerPassword(new M.S({correo:t.correo,password:t.password}));if("Right"===r._tag&&(t.resetState(),t.mensageAlerta({title:"\xc9xito",message:"La contrase\xf1a se ha reestablecido. Por favor, inicie sesi\xf3n con su nueva contrase\xf1a",type:"success"})),"Left"===r._tag){if(r.left instanceof y.lB)return void t.mensageAlerta({title:"Correo no encontrado",message:"Aseg\xfarese de que el correo ingresado sea correcto o que tenga una cuenta registrada"});t.mensageAlerta({title:"Ocurri\xf3 un problema",message:"Verifica tu conexi\xf3n a Internet e int\xe9ntalo nuevamente",type:"error"})}})()}onPressedButton(){var t=this;return(0,c.A)(function*(){t.disabledPassword?yield t.validarCorreo():yield t.reestablecer()})()}handleKeydown(t){this.disabledPassword&&t.preventDefault()}mensageAlerta({title:t="Alerta",message:r,type:n="warn"}){this.messageService.add({severity:n,summary:t,detail:r})}static{this.\u0275fac=function(r){return new(r||s)(e.rXU(P.Y),e.rXU(u.bg),e.rXU(k.F))}}static{this.\u0275cmp=e.VBU({type:s,selectors:[["app-reset-password"]],decls:24,vars:22,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],[1,"login-container"],[1,"w-full","surface-card"],[1,"text-center","mb-5"],[1,"text-900","text-xl","font-medium"],[1,"flex","flex-column"],["for","email1",1,"block","text-900","text-xl","font-medium","mb-2"],["id","email1","type","text","placeholder","ejemplo@correo.com","pInputText","","maxlength","70",1,"w-full","md:w-30rem","mb-5",3,"ngModelChange","ngModel","disabled"],["for","password1",1,"block","text-900","font-medium","text-xl","mb-2"],["id","password1","styleClass","mb-5","inputStyleClass","w-full md:w-30rem","placeholder","M\xednimo 8 caracteres","promptLabel","Escribe tu contrase\xf1a","weakLabel","D\xe9bil","mediumLabel","Aceptable","strongLabel","Fuerte",3,"ngModelChange","keydown","ngModel","disabled","toggleMask","feedback"],["id","password2","styleClass","mb-5","inputStyleClass","w-full md:w-30rem","placeholder","Repita su contrase\xf1a",3,"ngModelChange","keydown","ngModel","disabled","toggleMask","feedback"],["pButton","","pRipple","",1,"w-full","text-xl","font-bold","flex","justify-center","items-center","gap-2","py-2","px-4",2,"height","3rem",3,"click","disabled"],["class","w-full text-center","strokeWidth","6","fill","transparent","animationDuration",".3s",3,"style",4,"ngIf"],["class","w-full text-center",4,"ngIf"],[1,"flex","justify-content-center","mt-5"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer","font-medium",2,"color","var(--primary-color)",3,"routerLink"],["strokeWidth","6","fill","transparent","animationDuration",".3s",1,"w-full","text-center"],[1,"w-full","text-center"]],template:function(r,n){1&r&&(e.nrm(0,"p-toast"),e.j41(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"span",5),e.EFF(7),e.k0s()(),e.j41(8,"div",6)(9,"label",7),e.EFF(10,"Correo"),e.k0s(),e.j41(11,"input",8),e.mxI("ngModelChange",function(a){return e.DH7(n.correo,a)||(n.correo=a),a}),e.k0s(),e.j41(12,"label",9),e.EFF(13,"Nueva contrase\xf1a"),e.k0s(),e.j41(14,"p-password",10),e.mxI("ngModelChange",function(a){return e.DH7(n.password,a)||(n.password=a),a}),e.bIt("keydown",function(a){return n.handleKeydown(a)}),e.k0s(),e.j41(15,"label",9),e.EFF(16,"Confirmar contrase\xf1a"),e.k0s(),e.j41(17,"p-password",11),e.mxI("ngModelChange",function(a){return e.DH7(n.confirmarPassword,a)||(n.confirmarPassword=a),a}),e.bIt("keydown",function(a){return n.handleKeydown(a)}),e.k0s(),e.j41(18,"button",12),e.bIt("click",function(){return n.onPressedButton()}),e.DNE(19,A,1,3,"p-progressSpinner",13)(20,I,2,1,"span",14),e.k0s(),e.j41(21,"div",15)(22,"a",16),e.EFF(23,"Volver a Inicio de Sesi\xf3n"),e.k0s()()()()()()()),2&r&&(e.R7$(7),e.SpI(" ",n.labelInstructions," "),e.R7$(4),e.R50("ngModel",n.correo),e.Y8G("disabled",n.disabledCorreo),e.R7$(3),e.Aen(e.lJ4(19,b)),e.R50("ngModel",n.password),e.Y8G("disabled",n.disabledPassword)("toggleMask",!0)("feedback",!0),e.R7$(3),e.Aen(e.lJ4(20,b)),e.R50("ngModel",n.confirmarPassword),e.Y8G("disabled",n.disabledPassword)("toggleMask",!0)("feedback",!1),e.R7$(),e.Y8G("disabled",n.isLoading),e.R7$(),e.Y8G("ngIf",n.isLoading),e.R7$(),e.Y8G("ngIf",!n.isLoading),e.R7$(2),e.Y8G("routerLink",e.lJ4(21,F)))},dependencies:[i.bT,p.Wk,m._f,f.S,d.me,d.BC,d.tU,d.vS,h._2,w.n,C.y8,R],styles:['@charset "UTF-8";.login-container[_ngcontent-%COMP%]{border-radius:56px;padding:.3rem;background:linear-gradient(180deg,var(--primary-color) 10%,rgba(33,150,243,0) 30%)}.surface-card[_ngcontent-%COMP%]{border-radius:56px;padding:1.5rem}p-password[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{width:100%;border-radius:10px;transition:all .3s ease-in-out}.text-900[_ngcontent-%COMP%]{color:#1e1e1e}@media screen and (max-width: 319px){.logo[_ngcontent-%COMP%]{width:120px}.login-container[_ngcontent-%COMP%]{border-radius:35px}.surface-card[_ngcontent-%COMP%]{padding:1rem;border-radius:35px}.text-3xl[_ngcontent-%COMP%]{font-size:1.5rem}p-password[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{border-width:1px}}@media screen and (min-width: 320px) and (max-width: 759px){.login-container[_ngcontent-%COMP%], .surface-card[_ngcontent-%COMP%]{border-radius:45px}.text-3xl[_ngcontent-%COMP%]{font-size:2rem}}@media screen and (min-width: 760px) and (max-width: 1199px){.logo[_ngcontent-%COMP%]{width:140px}.surface-card[_ngcontent-%COMP%]{padding:2rem}.text-3xl[_ngcontent-%COMP%]{font-size:2.5rem}p-password[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{border-width:2px}}@media screen and (min-width: 1200px){.logo[_ngcontent-%COMP%]{width:150px}.surface-card[_ngcontent-%COMP%]{padding:2.5rem}.text-3xl[_ngcontent-%COMP%]{font-size:3rem}p-password[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{border-width:2px}}']})}}return s})(),D=(()=>{class s{static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({imports:[p.iI.forChild([{path:"",component:j}]),p.iI]})}}return s})(),B=(()=>{class s{static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275mod=e.$C({type:s})}static{this.\u0275inj=e.G2t({providers:[u.bg],imports:[i.MD,D,m.tm,v.q4,f.u,d.YN,h.Ou,w.Z,C.MB,O]})}}return s})()}}]);