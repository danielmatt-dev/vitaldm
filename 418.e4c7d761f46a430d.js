"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[418],{7418:(U,M,s)=>{s.r(M),s.d(M,{AgregarPacienteModule:()=>z});var I=s(177),C=s(3607),u=s(467),S=s(6467),w=s(1635),D=s(4706),j=s(4454);class v extends j.w{constructor(r={}){super({folio:r.folio,nombre:r.nombre,apellidoPaterno:r.apellidoPaterno,apellidoMaterno:r.apellidoMaterno,fechaNacimiento:r.fechaNacimiento,genero:r.genero,estadoCivil:r.estadoCivil,nivelEstudios:r.nivelEstudios,numMiembrosHogar:r.numMiembrosHogar,tipoDiabetes:r.tipoDiabetes,tiempoDiabetes:r.tiempoDiabetes,peso:r.peso,talla:r.talla,imc:r.imc,caloriasDia:r.caloriasDiarias,factorActividad:r.factorActividad,telefono:r.telefono,correo:r.correo}),this.password=r.password,this.claveDoctor=r.claveDoctor,this.plataforma=r.plataforma}}(0,w.Cg)([(0,D.v)({name:"clave_doctor"})],v.prototype,"claveDoctor",void 0);var E=s(7087),b=s(4464);class k{constructor(r={}){this.paciente=r.paciente,this.tratamientos=r.tratamientos,this.respuestas=r.respuestas}}var R=s(1510),N=s(5621),e=s(4438),p=s(5779),x=s(8777),O=s(7639),h=s(1141),_=s(2242),d=s(4341),A=s(9851),P=s(9883),F=s(6296),T=s(7722),y=s(1570);const c=()=>({width:"100%"}),H=()=>({width:"35rem","max-width":"40rem","overflow-x":"hidden"});function G(l,r){if(1&l){const o=e.RV6();e.j41(0,"div",44)(1,"p-button",45),e.bIt("click",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.abrirDialogoSensacion())})("keydown",function(n){e.eBV(o);const i=e.XpG();return e.Njj(i.onKeyDownHandler(n))}),e.k0s()()}}let V=(()=>{class l{constructor(o,t,n,i){this.primengConfig=o,this.messageService=t,this.remotePaciente=n,this.remoteTratamiento=i,this.fechaNacimiento=new Date,this.maxDate=new Date,this.generos=["Hombre","Mujer"],this.estados={"Soltero(a)":"Solter@","Casado(a)":"Casad@","Divorciado(a)":"Divoriciad@","Viudo(a)":"Viud@","Uni\xf3n Libre":"Uni\xf3n Libre"},this.estadosCivil=Object.keys(this.estados),this.nivelesEstudio=["Ninguno","Primaria","Secundaria","Preparatoria","Univerdad","Postgrado"],this.factores=["Muy ligera","Ligera","Moderada","Intensa"],this.sensaciones=[{nombre:"Manos"},{nombre:"Pies"},{nombre:"Brazos"},{nombre:"Piernas"},{nombre:"Ninguno"}],this.sensacionesSeleccionadas=[],this.opcionesVision=["Mi visi\xf3n es adecuada","He experimentado visi\xf3n borrosa","Visi\xf3n borrosa que no se corrige con lentes","Uso lentes o gafas"],this.tiposDiabetes=["Tipo 1","Tipo 2","Lo desconozco"],this.tiemposDiabetes=["Menos de 1 a\xf1o","De 1 a 5 a\xf1os","De 5 a 15 a\xf1os","M\xe1s de 15 a\xf1os"],this.ninguno=new S.W({nombre:"Ninguno"}),this.tratamientosOrales=[],this.tratamientosInsulina=[],this.tratamientosOralesSeleccionados=[],this.tratamientosInsulinaSeleccionados=[],this.visibleAgregarSensacion=!1,this.message="",this.validator=new N.t(this.messageService)}ngOnInit(){var o=this;return(0,u.A)(function*(){o.primengConfig.ripple=!0,o.inicializarVariables(),(0,E.G)(o.primengConfig),yield o.buscarTratamientos()})()}inicializarVariables(){this.nombre="",this.apellidoPaterno="",this.apellidoMaterno="",this.telefono="",this.correo="",this.fechaNacimiento=new Date,this.peso="",this.talla="",this.generoSeleccionado="",this.estadoSeleccionado="",this.nivelSeleccionado="",this.factorSeleccionado="",this.numMiembros="",this.sensacionesSeleccionadas=[],this.opcionVisionSeleccionada="",this.diabetesSeleccionada="",this.tiempoSeleccionado="",this.tratamientosOralesSeleccionados=[],this.tratamientosInsulinaSeleccionados=[],this.nuevaSensacion="",this.maxDate.setFullYear((new Date).getFullYear()-18),this.fechaNacimiento=this.maxDate}buscarTratamientos(){var o=this;return(0,u.A)(function*(){const t=yield o.remoteTratamiento.buscarTratamientos();"Right"===t._tag&&t.right.forEach(n=>{"Oral"===n.tipo&&o.tratamientosOrales.push(n),"Insulina"===n.tipo&&o.tratamientosInsulina.push(n)}),"Left"===t._tag&&o.mensageAlerta({title:"Ocurri\xf3 un problema al buscar tratamientos",message:"Verifica tu conexi\xf3n a Internet e int\xe9ntalo nuevamente",type:"error"}),o.tratamientosOrales.push(o.ninguno),o.tratamientosInsulina.push(o.ninguno)})()}guardarPaciente(){var o=this;return(0,u.A)(function*(){if(!(o.validarSeccionContacto()&&o.validarSeccionTecnica()&&o.validarSeccionSomatometria()&&o.validarSeccionMedica()))return;const t=new v({nombre:o.nombre,apellidoPaterno:o.apellidoPaterno,apellidoMaterno:o.apellidoMaterno,fechaNacimiento:o.fechaNacimiento.toLocaleDateString("en-CA"),genero:o.generoSeleccionado,estadoCivil:o.estados[o.estadoSeleccionado],nivelEstudios:o.nivelSeleccionado,numMiembrosHogar:parseInt(o.numMiembros),tipoDiabetes:o.diabetesSeleccionada,tiempoDiabetes:o.tiempoSeleccionado,factorActividad:o.factorSeleccionado,peso:parseFloat(o.peso),talla:parseFloat(o.talla),correo:o.correo,telefono:o.telefono,password:o.generarPassword(),plataforma:"Web"});o.limpiarTratamientosOrales(),o.limpiarTratamientosInsulina();const n=new S.F({folio:0,tratamientos:[...o.tratamientosOralesSeleccionados,...o.tratamientosInsulinaSeleccionados]});o.limpiarSensaciones();const i=[new b.S({idPregunta:32,descripcionPregunta:"\xbfHas experimentado sensaci\xf3n de adormecimiento, hormigueo o ardor en alguna parte del cuerpo?",tipo:"somatometria",respuesta:o.sensacionesSeleccionadas.map(f=>f.nombre).join(", "),puntaje:0}),new b.S({idPregunta:33,descripcionPregunta:"\xbfConsideras que tu visi\xf3n es adecuada o has experimentado visi\xf3n borrosa?",tipo:"somatometria",respuesta:o.opcionVisionSeleccionada,puntaje:0})],a=new k({paciente:t,tratamientos:n,respuestas:i}),m=yield o.remotePaciente.registrarDatos(a);if("Right"===m._tag)return o.mensageAlerta({title:"\xc9xito",message:"Los datos del paciente se han registrado exitosamente",type:"success"}),void o.inicializarVariables();if("Left"===m._tag){if(m.left instanceof R.ep)return void o.mensageAlerta({message:"El correo ingresado ya est\xe1 registrado, por favor, utilice un correo diferente"});o.mensageAlerta({title:"Error al registrar paciente",message:"Ocurri\xf3 un problema al intentar registrar los datos del paciente, por favor, int\xe9ntalo m\xe1s tarde",type:"error"})}})()}validarSeccionContacto(){return!!(this.validator.validarNombre(this.nombre)&&this.validator.validarApellidoPaterno(this.apellidoPaterno)&&this.validator.validarApellidoMaterno(this.apellidoMaterno)&&this.validator.validarTelefono(this.telefono))&&this.validator.validarCampoCorreo(this.correo)}validarSeccionTecnica(){return!(!this.validator.validarFechaNacimiento(this.fechaNacimiento,this.maxDate,"paciente")||!this.validator.validarGenero(this.generoSeleccionado)||(""===this.estadoSeleccionado.trim()?(this.message='Por favor, selecciona una opci\xf3n v\xe1lida en el campo "Estado Civil"',this.mensageAlerta({message:this.message}),1):""===this.nivelSeleccionado.trim()?(this.message='Por favor, selecciona una opci\xf3n v\xe1lida en el campo "Nivel de estudios"',this.mensageAlerta({message:this.message}),1):""===this.numMiembros.trim()?(this.message='El campo "#Miembros del hogar" es obligatorio y no puede estar vac\xedo',this.mensageAlerta({message:this.message}),1):isNaN(Number(this.numMiembros.trim()))&&(this.message='El campo "#Miembros del hogar" debe tener contener solo n\xfameros',this.mensageAlerta({message:this.message}),1)))}validarSeccionSomatometria(){if(""===this.peso.trim())return this.message='El campo "Peso (kgs)" es obligatorio y no puede estar vac\xedo',this.mensageAlerta({message:this.message}),!1;if(isNaN(Number(this.peso.trim())))return this.message='El campo "Peso" debe tener contener solo n\xfameros',this.mensageAlerta({message:this.message}),!1;const o=parseFloat(this.peso);if(o<=0)return this.mensageAlerta({message:"El peso debe ser mayor a 0 kgs"}),!1;if(o>200)return this.message="El peso no puede ser mayor a 200 kgs",this.mensageAlerta({message:this.message}),!1;if(""===this.talla.trim())return this.message='El campo "Talla (cms)" es obligatorio y no puede estar vac\xedo',this.mensageAlerta({message:this.message}),!1;if(isNaN(Number(this.talla.trim())))return this.mensageAlerta({message:'El campo "Talla" debe tener contener solo n\xfameros'}),!1;const t=parseFloat(this.talla);return t<=0?(this.message="La talla debe ser mayor a 0 cms",this.mensageAlerta({message:this.message}),!1):t>200?(this.message="La talla no puede ser mayor a 200 cms",this.mensageAlerta({message:this.message}),!1):""===this.factorSeleccionado.trim()?(this.message='Por favor, selecciona una opci\xf3n v\xe1lida en el campo "Factor de actividad"',this.mensageAlerta({message:this.message}),!1):0===this.sensacionesSeleccionadas.length?(this.message='Por favor, selecciona una respuesta v\xe1lida para la pregunta "\xbfHas experimentado sensaci\xf3n de...?"',this.mensageAlerta({message:this.message}),!1):""!==this.opcionVisionSeleccionada.trim()||(this.message='Por favor, selecciona una respuesta v\xe1lida para la pregunta "\xbfConsideras que tu visi\xf3n es...?"',this.mensageAlerta({message:this.message}),!1)}validarSeccionMedica(){return""===this.diabetesSeleccionada.trim()?(this.message='Por favor, selecciona una opci\xf3n v\xe1lida en el campo "Tipo de Diabetes"',this.mensageAlerta({message:this.message}),!1):""===this.tiempoSeleccionado.trim()?(this.message='Por favor, selecciona una opci\xf3n v\xe1lida en el campo "Tiempo con diabetes"',this.mensageAlerta({message:this.message}),!1):0===this.tratamientosOralesSeleccionados.length?(this.message='Por favor, selecciona al menos un tratamiento oral o marca la opci\xf3n "Ninguno"',this.mensageAlerta({message:this.message}),!1):0!==this.tratamientosInsulinaSeleccionados.length||(this.message='Por favor, selecciona al menos un tratamiento de insulina o marca la opci\xf3n "Ninguno"',this.mensageAlerta({message:this.message}),!1)}guardarSensacion(){this.nuevaSensacion&&(this.sensaciones.push({nombre:this.nuevaSensacion}),this.sensacionesSeleccionadas.push({nombre:this.nuevaSensacion}),this.onSensacionChange()),this.cerrarDialogoSensacion()}onSensacionChange(){this.sensacionesSeleccionadas.length<=0||("Ninguno"!==this.sensacionesSeleccionadas[this.sensacionesSeleccionadas.length-1].nombre?this.limpiarSensaciones():this.sensacionesSeleccionadas=[{nombre:"Ninguno"}])}limpiarSensaciones(){this.sensacionesSeleccionadas=this.sensacionesSeleccionadas.filter(o=>"Ninguno"!==o.nombre)}onTratamientoOralChange(){this.tratamientosOralesSeleccionados.length<=0||(this.tratamientosOralesSeleccionados[this.tratamientosOralesSeleccionados.length-1]!==this.ninguno?this.limpiarTratamientosOrales():this.tratamientosOralesSeleccionados=[this.ninguno])}limpiarTratamientosOrales(){this.tratamientosOralesSeleccionados=this.tratamientosOralesSeleccionados.filter(o=>"Ninguno"!==o.nombre)}onTratamientoInsulinaChange(){this.tratamientosInsulinaSeleccionados.length<=0||(this.tratamientosInsulinaSeleccionados[this.tratamientosInsulinaSeleccionados.length-1]!==this.ninguno?this.limpiarTratamientosInsulina():this.tratamientosInsulinaSeleccionados=[this.ninguno])}limpiarTratamientosInsulina(){this.tratamientosInsulinaSeleccionados=this.tratamientosInsulinaSeleccionados.filter(o=>"Ninguno"!==o.nombre)}generarPassword(){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t="abcdefghijklmnopqrstuvwxyz",n="0123456789",i=o+t+n;let g=o[Math.floor(26*Math.random())]+t[Math.floor(26*Math.random())]+n[Math.floor(10*Math.random())];for(;g.length<8;)g+=i[Math.floor(62*Math.random())];return g=g.split("").sort(()=>Math.random()-.5).join(""),g}abrirDialogoSensacion(){this.visibleAgregarSensacion=!0}cerrarDialogoSensacion(){this.visibleAgregarSensacion=!1,this.nuevaSensacion=""}onKeyDownHandler(o){"Enter"===o.key&&this.abrirDialogoSensacion()}mensageAlerta({title:o="Alerta",message:t,type:n="warn",life:i=3e3}){this.messageService.add({severity:n,summary:o,detail:t,life:i})}static{this.\u0275fac=function(t){return new(t||l)(e.rXU(p.r1),e.rXU(p.bg),e.rXU(x.H),e.rXU(O.M))}}static{this.\u0275cmp=e.VBU({type:l,selectors:[["app-agregar-paciente"]],decls:118,vars:68,consts:[[1,"flex","flex-wrap","flex-column"],[1,"flex","flex-wrap","justify-content-between","align-items-center","py-3","px-5","mt-2","mb-4","border-round-xl","bg-white","w-full","shadow-5"],[1,"font-semibold","text-3xl","m-0"],["pButton","","label","Registrar","icon","pi pi-user-plus",1,"responsive-button",3,"click"],[1,"flex","flex-column","px-4","py-3","border-round-2xl","bg-white"],[1,"flex","flex-column","py-3","row-gap-5"],[1,"flex","flex-column"],[1,"section-title"],[1,"grid","contact-section","border-round-2xl","border-2","border-200","shadow-2"],[1,"field"],[1,"font-semibold","text-base"],["type","text","pInputText","","placeholder","Juan","maxlength","50",1,"custom-input",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","Garc\xeda","maxlength","50",1,"custom-input",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","P\xe9rez","maxlength","50",1,"custom-input",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","1234567890","maxlength","10","minlength","10",1,"custom-input",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","ejemplo@correo.com","maxlength","70",1,"custom-input",3,"ngModelChange","ngModel"],[1,"grid","ficha-tecnica-section","border-round-2xl","border-2","border-200","shadow-2"],["id","fechaNacimiento","dateFormat","dd/mm/yy","showIcon","true","inputId","edad","readonlyInput","true",3,"ngModelChange","ngModel","maxDate"],["placeholder","Seleccione el g\xe9nero",1,"min-w-full",3,"ngModelChange","options","ngModel"],["placeholder","Seleccione el estado civil",1,"min-w-full",3,"ngModelChange","options","ngModel"],["placeholder","Seleccione el nivel de estudios",1,"min-w-full",3,"ngModelChange","options","ngModel"],["type","text","pInputText","","placeholder","3","maxlength","3",1,"custom-input",3,"ngModelChange","ngModel"],[1,"grid","somatometria-section","border-round-2xl","border-2","border-200","shadow-2"],["type","text","pInputText","","placeholder","60",1,"custom-input",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","160",1,"custom-input",3,"ngModelChange","ngModel"],["placeholder","Seleccione el factor de actividad",1,"min-w-full",3,"ngModelChange","options","ngModel"],["optionLabel","nombre","placeholder","Seleccione las respuestas","display","chip","emptyFilterMessage","No se encontraron resultados","styleClass","w-full md:w-80",3,"ngModelChange","onChange","options","ngModel","maxSelectedLabels","showToggleAll"],["pTemplate","footer"],["placeholder","Seleccione una respuesta",1,"min-w-full",3,"ngModelChange","options","ngModel"],["placeholder","Seleccione un opci\xf3n",1,"min-w-full",3,"ngModelChange","options","ngModel"],["placeholder","Seleccione una opci\xf3n",1,"min-w-full",3,"ngModelChange","options","ngModel"],["optionLabel","nombre","placeholder","Seleccione los medicamentos","display","chip","emptyFilterMessage","No se encontraron resultados","styleClass","w-full md:w-80",3,"ngModelChange","onChange","options","ngModel","maxSelectedLabels","showToggleAll"],["optionLabel","nombre","placeholder","Seleccione la insulina","display","chip","emptyFilterMessage","No se encontraron resultados","styleClass","w-full md:w-80",3,"ngModelChange","onChange","options","ngModel","maxSelectedLabels","showToggleAll"],["header","Agregar una nueva opci\xf3n",3,"visibleChange","onHide","modal","visible"],[1,"flex","flex-column","justify-content-center","mx-3","my-3"],[1,"flex","flex-wrap","flex-column","mb-4"],[1,"flex","justify-content-start","mb-2"],[1,"font-semibold","text-lg"],[1,"flex"],["type","text","pInputText","","placeholder","Ambas manos...","maxlength","50",1,"w-full",3,"ngModelChange","ngModel"],[1,"flex","flex-row","justify-content-end","mt-3"],[1,"mr-3"],["label","Cancelar","severity","danger",3,"onClick","outlined"],["label","Guardar",3,"onClick","disabled"],[1,"p-3","flex","justify-between"],["label","Agregar Nuevo","severity","primary","text","","size","small","icon","pi pi-plus",3,"click","keydown"]],template:function(t,n){1&t&&(e.nrm(0,"p-toast"),e.j41(1,"div",0)(2,"div",1)(3,"p",2),e.EFF(4,"Datos del Paciente "),e.k0s(),e.j41(5,"button",3),e.bIt("click",function(){return n.guardarPaciente()}),e.k0s()(),e.j41(6,"div",4)(7,"div",5)(8,"div",6)(9,"div")(10,"p",7),e.EFF(11,"Contacto"),e.k0s()(),e.j41(12,"div",8)(13,"div",9)(14,"p",10),e.EFF(15,"Nombre(s)"),e.k0s(),e.j41(16,"input",11),e.mxI("ngModelChange",function(a){return e.DH7(n.nombre,a)||(n.nombre=a),a}),e.k0s()(),e.j41(17,"div",9)(18,"p",10),e.EFF(19,"Apellido Paterno"),e.k0s(),e.j41(20,"input",12),e.mxI("ngModelChange",function(a){return e.DH7(n.apellidoPaterno,a)||(n.apellidoPaterno=a),a}),e.k0s()(),e.j41(21,"div",9)(22,"p",10),e.EFF(23,"Apellido Materno"),e.k0s(),e.j41(24,"input",13),e.mxI("ngModelChange",function(a){return e.DH7(n.apellidoMaterno,a)||(n.apellidoMaterno=a),a}),e.k0s()(),e.j41(25,"div",9)(26,"p",10),e.EFF(27,"Tel\xe9fono"),e.k0s(),e.j41(28,"input",14),e.mxI("ngModelChange",function(a){return e.DH7(n.telefono,a)||(n.telefono=a),a}),e.k0s()(),e.j41(29,"div",9)(30,"p",10),e.EFF(31,"Correo"),e.k0s(),e.j41(32,"input",15),e.mxI("ngModelChange",function(a){return e.DH7(n.correo,a)||(n.correo=a),a}),e.k0s()()()(),e.j41(33,"div",6)(34,"div")(35,"p",7),e.EFF(36,"Ficha T\xe9cnica"),e.k0s()(),e.j41(37,"div",16)(38,"div",9)(39,"p",10),e.EFF(40,"Fecha de nacimiento"),e.k0s(),e.j41(41,"p-calendar",17),e.mxI("ngModelChange",function(a){return e.DH7(n.fechaNacimiento,a)||(n.fechaNacimiento=a),a}),e.k0s()(),e.j41(42,"div",9)(43,"p",10),e.EFF(44,"G\xe9nero"),e.k0s(),e.j41(45,"p-dropdown",18),e.mxI("ngModelChange",function(a){return e.DH7(n.generoSeleccionado,a)||(n.generoSeleccionado=a),a}),e.k0s()(),e.j41(46,"div",9)(47,"p",10),e.EFF(48,"Estado Civil"),e.k0s(),e.j41(49,"p-dropdown",19),e.mxI("ngModelChange",function(a){return e.DH7(n.estadoSeleccionado,a)||(n.estadoSeleccionado=a),a}),e.k0s()(),e.j41(50,"div",9)(51,"p",10),e.EFF(52,"Nivel de estudios"),e.k0s(),e.j41(53,"p-dropdown",20),e.mxI("ngModelChange",function(a){return e.DH7(n.nivelSeleccionado,a)||(n.nivelSeleccionado=a),a}),e.k0s()(),e.j41(54,"div",9)(55,"p",10),e.EFF(56,"# Miembros del hogar"),e.k0s(),e.j41(57,"input",21),e.mxI("ngModelChange",function(a){return e.DH7(n.numMiembros,a)||(n.numMiembros=a),a}),e.k0s()()()(),e.j41(58,"div",6)(59,"div")(60,"p",7),e.EFF(61,"Somatometr\xeda"),e.k0s()(),e.j41(62,"div",22)(63,"div",9)(64,"p",10),e.EFF(65,"Peso (kgs)"),e.k0s(),e.j41(66,"input",23),e.mxI("ngModelChange",function(a){return e.DH7(n.peso,a)||(n.peso=a),a}),e.k0s()(),e.j41(67,"div",9)(68,"p",10),e.EFF(69,"Talla (cms)"),e.k0s(),e.j41(70,"input",24),e.mxI("ngModelChange",function(a){return e.DH7(n.talla,a)||(n.talla=a),a}),e.k0s()(),e.j41(71,"div",9)(72,"p",10),e.EFF(73,"Factor de actividad"),e.k0s(),e.j41(74,"p-dropdown",25),e.mxI("ngModelChange",function(a){return e.DH7(n.factorSeleccionado,a)||(n.factorSeleccionado=a),a}),e.k0s()(),e.j41(75,"div",9)(76,"p",10),e.EFF(77," \xbfHas experimentado sensaci\xf3n de adormecimiento, hormigueo o ardor en alguna parte del cuerpo? "),e.k0s(),e.j41(78,"p-multiSelect",26),e.mxI("ngModelChange",function(a){return e.DH7(n.sensacionesSeleccionadas,a)||(n.sensacionesSeleccionadas=a),a}),e.bIt("onChange",function(){return n.onSensacionChange()}),e.DNE(79,G,2,0,"ng-template",27),e.k0s()(),e.j41(80,"div",9)(81,"p",10),e.EFF(82,"\xbfConsideras que tu visi\xf3n es adecuada o has experimentado visi\xf3n borrosa?"),e.k0s(),e.j41(83,"p-dropdown",28),e.mxI("ngModelChange",function(a){return e.DH7(n.opcionVisionSeleccionada,a)||(n.opcionVisionSeleccionada=a),a}),e.k0s()()()(),e.j41(84,"div",6)(85,"div")(86,"p",7),e.EFF(87,"Ficha M\xe9dica"),e.k0s()(),e.j41(88,"div",8)(89,"div",9)(90,"p",10),e.EFF(91,"Tipo de diabetes"),e.k0s(),e.j41(92,"p-dropdown",29),e.mxI("ngModelChange",function(a){return e.DH7(n.diabetesSeleccionada,a)||(n.diabetesSeleccionada=a),a}),e.k0s()(),e.j41(93,"div",9)(94,"p",10),e.EFF(95,"Tiempo con diabetes"),e.k0s(),e.j41(96,"p-dropdown",30),e.mxI("ngModelChange",function(a){return e.DH7(n.tiempoSeleccionado,a)||(n.tiempoSeleccionado=a),a}),e.k0s()(),e.j41(97,"div",9)(98,"p",10),e.EFF(99,"Medicamentos orales"),e.k0s(),e.j41(100,"p-multiSelect",31),e.mxI("ngModelChange",function(a){return e.DH7(n.tratamientosOralesSeleccionados,a)||(n.tratamientosOralesSeleccionados=a),a}),e.bIt("onChange",function(){return n.onTratamientoOralChange()}),e.k0s()(),e.j41(101,"div",9)(102,"p",10),e.EFF(103,"Insulina"),e.k0s(),e.j41(104,"p-multiSelect",32),e.mxI("ngModelChange",function(a){return e.DH7(n.tratamientosInsulinaSeleccionados,a)||(n.tratamientosInsulinaSeleccionados=a),a}),e.bIt("onChange",function(){return n.onTratamientoInsulinaChange()}),e.k0s()()()()()()(),e.j41(105,"p-dialog",33),e.mxI("visibleChange",function(a){return e.DH7(n.visibleAgregarSensacion,a)||(n.visibleAgregarSensacion=a),a}),e.bIt("onHide",function(){return n.cerrarDialogoSensacion()}),e.j41(106,"div",34)(107,"div",35)(108,"div",36)(109,"p",37),e.EFF(110,"Nueva opci\xf3n"),e.k0s()(),e.j41(111,"div",38)(112,"input",39),e.mxI("ngModelChange",function(a){return e.DH7(n.nuevaSensacion,a)||(n.nuevaSensacion=a),a}),e.k0s()()(),e.j41(113,"div",40)(114,"div",41)(115,"p-button",42),e.bIt("onClick",function(){return n.cerrarDialogoSensacion()}),e.k0s()(),e.j41(116,"div")(117,"p-button",43),e.bIt("onClick",function(){return n.guardarSensacion()}),e.k0s()()()()()),2&t&&(e.R7$(16),e.R50("ngModel",n.nombre),e.R7$(4),e.R50("ngModel",n.apellidoPaterno),e.R7$(4),e.R50("ngModel",n.apellidoMaterno),e.R7$(4),e.R50("ngModel",n.telefono),e.R7$(4),e.R50("ngModel",n.correo),e.R7$(9),e.Aen(e.lJ4(59,c)),e.R50("ngModel",n.fechaNacimiento),e.Y8G("maxDate",n.maxDate),e.R7$(4),e.Aen(e.lJ4(60,c)),e.Y8G("options",n.generos),e.R50("ngModel",n.generoSeleccionado),e.R7$(4),e.Aen(e.lJ4(61,c)),e.Y8G("options",n.estadosCivil),e.R50("ngModel",n.estadoSeleccionado),e.R7$(4),e.Aen(e.lJ4(62,c)),e.Y8G("options",n.nivelesEstudio),e.R50("ngModel",n.nivelSeleccionado),e.R7$(4),e.R50("ngModel",n.numMiembros),e.R7$(9),e.R50("ngModel",n.peso),e.R7$(4),e.R50("ngModel",n.talla),e.R7$(4),e.Aen(e.lJ4(63,c)),e.Y8G("options",n.factores),e.R50("ngModel",n.factorSeleccionado),e.R7$(4),e.Y8G("options",n.sensaciones),e.R50("ngModel",n.sensacionesSeleccionadas),e.Y8G("maxSelectedLabels",2)("showToggleAll",!0),e.R7$(5),e.Aen(e.lJ4(64,c)),e.Y8G("options",n.opcionesVision),e.R50("ngModel",n.opcionVisionSeleccionada),e.R7$(9),e.Aen(e.lJ4(65,c)),e.Y8G("options",n.tiposDiabetes),e.R50("ngModel",n.diabetesSeleccionada),e.R7$(4),e.Aen(e.lJ4(66,c)),e.Y8G("options",n.tiemposDiabetes),e.R50("ngModel",n.tiempoSeleccionado),e.R7$(4),e.Y8G("options",n.tratamientosOrales),e.R50("ngModel",n.tratamientosOralesSeleccionados),e.Y8G("maxSelectedLabels",2)("showToggleAll",!1),e.R7$(4),e.Y8G("options",n.tratamientosInsulina),e.R50("ngModel",n.tratamientosInsulinaSeleccionados),e.Y8G("maxSelectedLabels",2)("showToggleAll",!1),e.R7$(),e.Aen(e.lJ4(67,H)),e.Y8G("modal",!0),e.R50("visible",n.visibleAgregarSensacion),e.R7$(7),e.R50("ngModel",n.nuevaSensacion),e.R7$(3),e.Y8G("outlined",!0),e.R7$(2),e.Y8G("disabled",!n.nuevaSensacion))},dependencies:[h._f,h.$n,p.Ei,_.S,d.me,d.BC,d.xh,d.tU,d.vS,A.Vv,P.ms,F.KF,T.y8,y.l],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}.custom-input[_ngcontent-%COMP%]{padding:.75rem;font-size:1rem;border:1px solid #d1d5db;border-radius:.5rem;width:100%}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(16rem,1fr));gap:1rem;grid-auto-rows:min-content;align-content:space-around;height:auto}.contact-section[_ngcontent-%COMP%], .ficha-tecnica-section[_ngcontent-%COMP%], .somatometria-section[_ngcontent-%COMP%]{padding:1.5rem;margin-bottom:1rem}.ficha-medica-section[_ngcontent-%COMP%]{padding:1.5rem;margin-bottom:0}.responsive-button[_ngcontent-%COMP%]{height:2.5rem;padding:0 1rem;font-size:1rem;box-sizing:border-box}.flex[_ngcontent-%COMP%]{display:flex;gap:1rem}@media (min-width: 1200px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(5,1fr)}}@media (min-width: 768px) and (max-width: 1199px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 768px){.grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.responsive-button[_ngcontent-%COMP%]{width:100%}}.section-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin-bottom:1rem;white-space:normal}']})}}return l})(),Y=(()=>{class l{static{this.\u0275fac=function(t){return new(t||l)}}static{this.\u0275mod=e.$C({type:l})}static{this.\u0275inj=e.G2t({imports:[C.iI.forChild([{path:"",component:V}]),C.iI]})}}return l})();var L=s(8266);let z=(()=>{class l{static{this.\u0275fac=function(t){return new(t||l)}}static{this.\u0275mod=e.$C({type:l})}static{this.\u0275inj=e.G2t({providers:[p.bg],imports:[I.MD,Y,h.tm,L.P,_.u,d.YN,A.rO,P.kr,F.iV,T.MB,y.P]})}}return l})()}}]);