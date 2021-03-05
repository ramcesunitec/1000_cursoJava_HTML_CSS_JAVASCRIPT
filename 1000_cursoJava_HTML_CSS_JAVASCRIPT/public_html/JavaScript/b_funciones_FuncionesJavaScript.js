window.onload=iniciarDatos;

/*
 * Funcion que se manda llamar al cargar la pagina HTML
 */

function iniciarDatos(){
    document.getElementById("link").onclick=validarSalir;
    document.getElementById("linkSearch").onclick=busqueda;
}

/*
 * Funcion que valida si el usuario quiere salir del sitio o no
 */

function validarSalir(){
    if(confirm("Desea salir del sitio")){
        alert("Nois vamos a Google");
        return true; //Regresamos true para salir
    }else{
        alert("Nos quedamos en este sitio");
        return false; //Regresamos false para quedarnos
    }
}

/*
 * Funcion que pide una cadena a buscar en google
 */
function busqueda(){
    //Con la funcion prompt capturalmos informacion del usuario
    var respuesta=prompt("Escribe la cadena buscar","");
    //Si hubo una respuesta contatenamos a la cadena buscar a link a google
    if(respuesta){
        alert("Tu respuesta fue "+respuesta);
        //El operador this nos sive para referenciar al elemento que provoco el evento,
        //en este caso el elemento identificador "linkSearch" y concatenamos la respuesta
        //como un parametro de una peticion get
        var nuevolink=this+"search?q="+respuesta; //this=http://www.google.com.mx 
        alert("Nuevo link "+nuevolink);
        //redireccionamos el link
        window.location=nuevolink;
        //regresamos false, sino nos llevara al link original registrado en el elemento "linkSearch"
        return false;
    }else{
        alert("No proporcionaste ninguna cadena a buscar");
        return false;
    }
    
}