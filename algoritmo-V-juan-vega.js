///////////////////////////////////////////////////////////////////////////////////////

//                                   Algoritmo V                                     //

///////////////////////////////////////////////////////////////////////////////////////


//  1.- Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
/*

function resetNegativos(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    console.log(x)
}
y = resetNegativos([1, 2, -1, -3]);

*/



//  2.- Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
/*

function moverAdelante(array) {

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
    array[array.length - 1] = 0;
    console.log(array);

}
y = moverAdelante([1, 2, 3]);

*/



//  3.- Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
/*

function returnReverso(x) {
    for (var i = 0; i < x.length; i++) {
        x = x.reverse();
    }
    console.log(x);
}

y = returnReverso([1, 2, 3])

*/



//  4.- Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
/*

function repetirValores(x) {
    var array = [];
    for (var i = 0; i < x.length; i++) {

        array.push(x[i], x[i]);
    }
    console.log(array);
}

y = repetirValores([4, 'Ulyses', 42, false])

*/