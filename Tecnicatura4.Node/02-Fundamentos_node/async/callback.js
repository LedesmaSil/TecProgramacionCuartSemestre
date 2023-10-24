function hola(nombre, micallback) {
    setTimeout( function () {
        console.log('Hola '+ nombre);
        micallback(nombre);
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout( function () {
        console.log('Adios '+ nombre);
        otrocallback();
    }, 1500);
}

console.log('Iniciando el proceso...');
hola('Carlos', function(nombre){
    adios(nombre, function() {
        console.log('Terminando el proceso...');
    });
});

//hola('Carlos', function(){});
//adios('Carlos', function(){});





