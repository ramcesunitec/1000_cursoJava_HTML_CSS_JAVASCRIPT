function sumar(){
    //Envolvemos todo el codigo try-cath para procesar la excepcion en caso de que haya ocurrido alguna
    try{
        //Pedimos el valor del operando A
        var a=prompt("Valor a: ","");
        
        
        //Validamos parametro a,!a revisa si la cadena esta vacia o nula
        if(!a||isNaN(a)){
            throw new Error("Valor invalido de a: "+a);
        }
        
        //Pedimos el valor del operando B
        var b=prompt("Valor b: ","");
        
        //Validamos parametro b,!b revisa si la cadena esta vacia o nula
        if(!b||isNaN(b)){
            throw new Error("Valor invalido de b: "+b);
        }
        
        //Si no hay problema hacemos la suma, necesitamos convertir a int los parametros partseInt 
        //convierte a entero, si no es entero no va a realizar la suma sino concatena los valores
        
        var c=parseFloat(a)+parseFloat(b);
        alert("La suma es: "+c)
    }catch (e){
        alert("El erros es: "+e.message);
    }
}