window.onload=cargarImagenes;

function cargarImagenes(){
    for(var i=0;i<document.images.length; i++){
        if(document.images[i].parentNode.tagName=="A"){
            configuraRollover(document.images[i]);
        }
    }
}

function configuraRollover(imagen){
    imagen.imagenOff=new Image();
    imagen.imagenOff.src="c_boton_off_Rollover.jpg";
    imagen.onmouseout=cambiaOff;
    
    imagen.imagenOn=new Image();
    imagen.imagenOn.src="c_boton_on_Rollover.jpg";
    imagen.onmouseover=cambiaOn;
}
 /*
  * Estas funciones se ejecutan segun el evento que se dispare pero no es iniciarla pagina,
  * sino dependen del boton que se presione, son conocidas como handlers
  */
 
 //Se asocio el evento onmouseout
 function cambiaOff(){
     this.src=this.imagenOff.src; //Tomamos los valores ya asociados
 }
 
  //Se asocio el evento onmouseout
 function cambiaOn(){
     this.src=this.imagenOn.src; //Tomamos los valores ya asociados
 }