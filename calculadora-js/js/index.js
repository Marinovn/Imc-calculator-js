window.onload = iniciar;

    //Funcion Principal
    function iniciar() {
    var boton = document.getElementById('btnCalcular');
    boton.addEventListener('click', calcularIMC);

    //Funcion para calcular
    function calcularIMC(){
    var peso = document.getElementById('peso').value;

    var altura = document.getElementById('altura').value;

    var calcular = peso / (altura*altura);

   
    //Comparamos el resultado
    if (Math.trunc(calcular) < 19 ) {
        
        mostrarMensaje("info", `Su IMC es : ${Math.trunc(calcular)} y es menor a lo recomendado`);
        
        cambiarClase('imgrojo', 'imgverde');
        
    }else if(Math.trunc(calcular) >= 26 ) {
        
       mostrarMensaje("danger", `Su IMC es : ${Math.trunc(calcular)}y es mayor a lo recomendado`);

        cambiarClase('imgverde','imgrojo');
        

    }else{
        
        mostrarMensaje("success", `Su IMC es : ${Math.trunc(calcular)} esta en los valores recomendados`);

        cambiarClase('imgrojo','imgverde');
        
    };
    //Funcion que cambia la clase de la imagen
    function cambiarClase(cssClass, cssClass2){
        var imagen = document.getElementById('imagen');

        imagen.classList.remove(cssClass);
        imagen.classList.add(cssClass2);
    }

    //Funcion que muestra la alerta
    function mostrarMensaje(cssClass,mensaje){
        var alerta = document.createElement('div');
        alerta.className = `alert alert-${cssClass} mt-4`;

        var contenedor = document.getElementById('container');
        var app = document.getElementById('app');

        var mensaje = mensaje;

        alerta.appendChild(document.createTextNode(mensaje));

        contenedor.insertBefore(alerta,app);
    };

    //Timeout para sacar la alerta
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

};
};